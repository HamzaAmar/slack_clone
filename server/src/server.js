import 'dotenv/config';
import path from 'path';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models, { sequelize } from './models/index';

const typesArray = fileLoader(path.join(__dirname, './graphql/schema'));

const typeDefs = mergeTypes(typesArray, { all: true });

const resolversArray = fileLoader(path.join(__dirname, './graphql/resolver'));

const resolvers = mergeResolvers(resolversArray);

// Variables
const app = express();
const { PORT } = process.env;

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
server.applyMiddleware({ app });

console.log('hello');

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Hi You are connected to the port ${PORT} with success`)
    );
  })
  .catch(error => {
    console.error(error);
  });
