import { gql } from 'apollo-server-express';

const userSchema = gql`
  # Schema
  type User {
    id: Int!
    name: String!
    email: String!
    teams: [Team!]!
    channels: [User!]!
  }
  # CRUD

  type Mutation {
    register(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    updateUser(
      id: Int!
      name: String!
      email: String!
      password: String!
    ): User!
    deleteUser(id: Int!): User!
  }

  type Query {
    getUser(id: Int!): User
    getUsers: [User]
  }
`;

export default userSchema;
