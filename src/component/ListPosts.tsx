import styled from '@emotion/styled'
import PostPicture from './PostPicture';

type Props = {
    title: string;
    picture: string;
    description: string;
    onClick: () => void;
};

const ListItem = ({title, picture, description, onClick} : Props) => (
    <ItemContainer onClick={onClick}>
        {title}
        <PostPicture src={picture} />
        {description}
    </ItemContainer>
)

const ItemContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export default ListItem