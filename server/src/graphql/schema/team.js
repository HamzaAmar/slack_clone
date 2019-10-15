import { gql } from 'apollo-server-express';

const teamSchema = gql`
  type Team {
    id: Int!
    name: String!
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }
`;

export default teamSchema;
