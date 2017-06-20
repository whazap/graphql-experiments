
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
const uuid = require('node-uuid');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;
const server = express();

const getUserByName = (name) =>
    fetch(`https://api.smashcast.tv/user/${name}`)
        .then(resp => resp.json());

const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLInt, // !! transforms string to number
            resolve: user => user.user_id,
        },
        name: {
            type: GraphQLString,
            resolve: user => user.user_name,
        },
        isLive: {
            type: GraphQLBoolean, // !! transforms string to bool
            resolve: user => user.is_live,
        },
        followers: {
            type: GraphQLInt, // !! transforms string to bool
        },
        cover: {
            type: GraphQLString,
            resolve: user => user.user_cover,
        },
        logo: {
            type: GraphQLString,
            resolve: user => user.user_logo,
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
                    name: {
                        type: new GraphQLNonNull(GraphQLString),
                    },
                },
                resolve: (_, args) => getUserByName(args.name),
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

/*

query {
  user(name: "wh4z4p") {
    id,
    name,
    isLive,
    logo,
    cover,
  }
}

*/
