
const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');
const Game = require('./game').default;

const getMedia = name =>
    fetch(`https://www.smashcast.tv/api/media/live/${name}`)
        .then(resp => resp.json())
        .then(json => json.livestream[0]);

const Media = new GraphQLObjectType({
    name: 'Media',
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve: media => media.media_id,
        },
        name: {
            type: GraphQLString,
            resolve: media => media.media_display_name,
        },
        status: {
            type: GraphQLString,
            resolve: media => media.media_status,
        },
        thumbnail: {
            type: GraphQLString,
            resolve: media => media.media_thumbnail,
        },
        viewers: {
            type: GraphQLInt,
            resolve: media => media.media_views,
        },
        language: {
            type: GraphQLString,
            resolve: media => ((media.media_countries && media.media_countries.length) ? media.media_countries[0] : ''),
        },
        game: {
            type: Game,
            resolve: media => media,
        },
    }),
});

const field = {
    type: Media,
    description: 'media descr',
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: (_, args) => getMedia(args.name),
};

module.exports = {
    default: Media,
    field,
};
