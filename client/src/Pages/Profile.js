import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const USER_PROFILE = gql`
  query {
    getUser(id: 1) {
      name
      email
      id
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(USER_PROFILE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;
  const { name, email, id } = data.getUser;
  return (
    <div>
      <h1>
        {name} {id}
      </h1>
      <p>{email}</p>
    </div>
  );
};

export default Profile;
