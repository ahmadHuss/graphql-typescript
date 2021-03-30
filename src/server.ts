import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import schema  from './schema';

const app = express();

const server = new ApolloServer({schema, playground: true});

app.use('*', cors());

server.applyMiddleware({app, path: '/graphql'});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`ApolloServer is running on http://localhost:${PORT}${server.graphqlPath}`)
});