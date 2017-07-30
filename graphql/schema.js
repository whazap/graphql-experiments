
const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');
const game = require('./game').field;
const media = require('./media').field;
const medias = require('./medias').field;

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'desc',
        fields: () => ({
            game,
            media,
            medias,
        }),
    }),
});

module.exports = schema;
