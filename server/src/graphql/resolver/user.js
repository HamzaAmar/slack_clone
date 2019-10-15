export default {
  Query: {
    getUser: async (parent, { id }, { models: { User } }) => {
      const userById = await User.findOne({ id });
      return userById;
    },
    getUsers: async (parent, args, { models: { User } }) => {
      const users = await User.findAll();
      return users;
    }
  },

  Mutation: {
    register: async (parent, args, { models: { User } }) => {
      const register = await User.create(args);
      console.log(register);
      return models;
    },
    login: (parent, args, { models }) => {
      console.log('Hello');
      return models.User;
    }
  }
};
