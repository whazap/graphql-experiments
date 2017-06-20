
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql');

const PORT = process.env.PORT || 3000;
const server = express();

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
                resolve: () => new Promise(resolve => resolve({
                    id: 'abc',
                    name: 'whazap',
                    age: 35,
                    isAdmin: true,
                })),
            },
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
