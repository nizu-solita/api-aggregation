const express = require('express');
const { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const app = express();

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

console.log('Running a GraphQL API server at http://localhost:4000/graphql');

app.listen(4000);