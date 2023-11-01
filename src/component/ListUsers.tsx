import styled from '@emotion/styled'
import { Avatar } from './Avatar';

type Props = {
    avatar: string;
    name: string;
    onClick: () => void;
};

const ListItem = ({name, avatar, onClick} : Props) => (
    <ItemContainer onClick={onClick}>
        <Avatar src={avatar} />
        {name}
    </ItemContainer>
)

const ItemContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export default ListItem