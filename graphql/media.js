const {

    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

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
        viewers: {
            type: GraphQLInt,
            resolve: media => media.media_views,
        },
        language: {
            type: GraphQLString,
            resolve: media => ((media.media_countries && media.media_countries.length) ? media.media_countries[0] : ''),
        },
        game: {
            type: GraphQLString,
            resolve: media => media.category_name,
        },
        gameSlug: {
            type: GraphQLString,
            resolve: media => media.category_seo_key,
        },
    }),
});

const field = {
    type: Media,
    description: 'media descr',
};

module.exports = {
    default: Media,
    field,
};
