
const express = require('express');
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

const query = `
    {
        users {
            id,
            name,
            age,
            isAdmin
        }
    }
`;

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

server.get('/graphql', (req, res) => {
    graphql(schema, query, resolvers)
        .then(result => res.send(JSON.stringify(result)))
        .catch(error => res.status(500).send(JSON.stringify(error)));
});

server.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
});
