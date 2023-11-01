import { useState, useEffect } from 'react'
import '../styles/App.css'
import styled from '@emotion/styled'
import createFakerPost from '../services/createFakerPost'
import { Post } from '../models/Post'
import ListItem from './ListPosts'
import { Link } from 'react-router-dom';
import Button from './Button'

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

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const nextUsers = createFakerPost(50);
      setPosts(nextUsers);
    }, 750);
  }, [])

  const createPost = (() => {
    const nextPost = createFakerPost(1);
    setPosts([...posts, ...nextPost])

    //setUsers((prev) => [...prev, ...nextUsers])
  })

  const deletePost = (id : number) => {
    const nextPost = posts.filter((post) => post.id !== id);

    setPosts(nextPost);
  }

  return (
    <div>
      <div>
        <AppHeadrer></AppHeadrer>
      </div>
      <ListeContainer>
        {posts.map(({id, picture, title, description}) =>(
          <ListItem key={id} picture={picture} title={title} description={description} onClick={() => deletePost(id)}></ListItem>
        ))}
      </ListeContainer>
      <Button onClick={createPost}>Create post</Button>
    </div>
  )
}

const ListeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export default Posts