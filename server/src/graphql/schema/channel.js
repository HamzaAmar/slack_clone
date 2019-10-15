import { gql } from 'apollo-server-express';

const userSchema = gql`
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    teamId: Team!
    messages: [Message!]!
    members: [User!]!
  }
`;

export default userSchema;
