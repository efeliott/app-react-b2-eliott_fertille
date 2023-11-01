import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import '../styles/App.css'
import styled from '@emotion/styled'
import { createFakerUser } from '../services/createFakerUser'
import { User } from '../models/User'
import TextField from './textField'
import ListItem from './ListUsers'
import Button from './Button'

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  // const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');

  const AppHeadrer = () => {
    return (
      <div>
        <HeaderContainer>
          <Link to='/posts'>Posts</Link>
          <Link to='/users'>Users</Link>
        </HeaderContainer>
    </div>
    )
  }

  // useEffect(() => {
  //   console.log("No deps array");
  //   if (count === 5) setLoading(false);
  // });

  // useEffect(() => {
  //   console.log("No deps array");
  //   if (count === 5) setLoading(false);
  // }, []);

  // useEffect(() => {
  //   console.log("No deps array");
  //   if (count === 5) setLoading(false);
  // }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      const nextUsers = createFakerUser(50);
      setUsers(nextUsers);
      setLoading(false);
    }, 750);
  }, [])

  const createUser = (() => {
    const nextUsers = createFakerUser(1);
    setUsers([...users, ...nextUsers])

    //setUsers((prev) => [...prev, ...nextUsers])
  })

  const deleteUser = (id : number) => {
    const nextUsers = users.filter((user) => user.id !== id);

    setUsers(nextUsers);
  }

  const filtered = useMemo(
    () => {
      if(!search) return users;

      return users.filter((user) => 
      user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      )
    }, [users, search]
  )

  if (loading) return <div>loading ...</div>

  return(
    <div>
      <div>
        <AppHeadrer />
      </div>
      <div>
        <ListeContainer>
          {filtered.map(({id, name, avatar}) =>(
            <ListItem key={id} name={name} avatar={avatar} onClick={() => deleteUser(id)}></ListItem>
          ))}
        </ListeContainer>
        <Button onClick={createUser}>Create user</Button>
        <TextField onChange={(e) => setSearch(e.target.value)}></TextField>
      </div>
    </div>
  )
}

const ListeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export default Users