
const {
    GraphQLInt,
    GraphQLList,
} = require('graphql');
const fetch = require('isomorphic-fetch');
const Media = require('./media').default;

const getMedias = (limit = 10) =>
    fetch(`https://www.smashcast.tv/api/media/live/list?fast=true&limit=${limit}`)
        .then(resp => resp.json())
        .then(json => json.livestream);

const Medias = new GraphQLList(Media);

const field = {
    type: Medias,
    description: 'medias descr',
    args: {
        limit: {
            type: GraphQLInt,
        },
    },
    resolve: (_, args) => getMedias(args.limit),
};

module.exports = {
    default: Medias,
    field,
};
