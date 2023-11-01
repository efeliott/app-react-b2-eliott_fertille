import { faker } from '@faker-js/faker';
import { User } from '../models/User'

export const createFakerUser = (Count: number):User[] =>
Array
.from(Array(Count)
.keys())
.map((id) => ({
    id: faker.number.float() + id,
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
}));