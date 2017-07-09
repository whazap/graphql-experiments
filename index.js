
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;
const server = express();

const getMedias = (limit = 10) =>
    fetch(`https://www.smashcast.tv/api/media/live/list?fast=true&limit=${limit}`)
        .then(resp => resp.json())
        .then(json => json.livestream);

const Media = new GraphQLObjectType({
    name: 'Media',
    fields: () => ({
        id: {
            type: GraphQLInt,
            resolve: media => media.media_id,
        },
        name: {
            type: GraphQLString,
            resolve: media => media.media_name,
        },
        status: {
            type: GraphQLString,
            resolve: media => media.media_status,
        },
        thumbnail: {
            type: GraphQLString,
            resolve: media => media.media_thumbnail,
        },
    }),
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'desc',
        fields: () => ({
            media: {
                type: Media,
                description: 'media descr',
            },
            medias: {
                type: new GraphQLList(Media),
                description: 'medias descr',
                args: {
                    limit: {
                        type: GraphQLInt,
                    },
                },
                resolve: (_, args) => getMedias(args.limit),
            },
        }),
    }),
});

server.use('/graphql', cors());
server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
