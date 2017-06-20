
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
    graphql,
    buildSchema,
} = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        age: Int,
        isAdmin: Boolean
    }

    type Query {
        user: User,
        users: [User]
    }
`);

const users = [
    {
        id: '1',
        name: 'whazap',
        age: 35,
        isAdmin: true,
    },
    {
        id: '2',
        name: 'wh4z4p',
        age: 20,
        isAdmin: false,
    },
];

const resolvers = {
    user: () => ({
        id: '1',
        name: 'whazap',
        age: 35,
        isAdmin: true,
    }),
    users: () => users,
};

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers,
}));

server.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
});
