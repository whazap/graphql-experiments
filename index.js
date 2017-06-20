
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
} = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

const users = [
    {
        id: 'abc',
        name: 'whazap',
        age: 35,
        isAdmin: true,
    },
    {
        id: 'xyz',
        name: 'wh4z4p',
        age: 20,
        isAdmin: false,
    },
];

const getUserById = (id) =>
    new Promise((resolve, reject) => {
        const user = users.filter(user => user.id === id);

        if (!user.length) {
            reject('no user found');
        }

        resolve(user[0]);
    });

const getUsers = () =>
    new Promise(resolve => resolve(users));


const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'Unique ID',
        },
        name: {
            type: GraphQLString,
            description: 'Username',
        },
        age: {
            type: GraphQLInt,
            description: 'Age of user',
        },
        isAdmin: {
            type: GraphQLBoolean,
            description: 'If user got admin rights',
        },
    }),
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'desc',
        fields: () => ({
            user: {
                type: User,
                description: 'user descr',
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    },
                },
                resolve: (_, args) => getUserById(args.id),
            },
            users: {
                type: new GraphQLList(User),
                resolve: () => getUsers(),
            }
        }),
    }),
});

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

server.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`);
});
