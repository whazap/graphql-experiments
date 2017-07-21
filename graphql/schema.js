
const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');
const media = require('./media').field;
const medias = require('./medias').field;

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'desc',
        fields: () => ({
            media,
            medias,
        }),
    }),
});

module.exports = schema;
