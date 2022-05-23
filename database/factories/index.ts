import Factory from "@ioc:Adonis/Lucid/Factory";
import User from "App/Models/User";
import { DateTime } from 'luxon';
import Post from '../../app/Models/Post';

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    name: faker.name.firstName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    details: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
    email_verified_at: DateTime.local(),
  };
}).relation('posts', () => PostFactory).build();

export const PostFactory = Factory.define(Post, ({ faker }) => {
    return {
        caption: faker.lorem.paragraph(),
        image: faker.image.animals(),

    };
  }).relation('user', () => UserFactory).build();
  