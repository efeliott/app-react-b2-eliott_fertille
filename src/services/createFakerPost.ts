import { faker } from '@faker-js/faker';
import { Post } from '../models/Post'

const createFakerUser = (Count: number):Post[] =>
Array
.from(Array(Count)
.keys())
.map((id) => ({
    id: new Date().getDate() + id,
    picture: faker.image.image(),
    title: faker.lorem.slug(),
    description: faker.lorem.lines(),
}));

export default createFakerUser