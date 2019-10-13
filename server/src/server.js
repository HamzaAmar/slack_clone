import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';

const app = express();
// add Variables
const PORT = process.env.PORT || 5500;

// config express server

app.use(cors);
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.listen(PORT, () =>
  console.log(`You are connected to express server with port ${PORT}`)
);
