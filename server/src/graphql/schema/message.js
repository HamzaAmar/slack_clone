import { gql } from 'apollo-server-express';

const userSchema = gql`
  type Message {
    id: Int!
    text: String!
    userId: User!
    channelId: Channel!
  }
`;

export default userSchema;
