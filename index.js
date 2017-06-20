
const {
    graphql,
    printSchema,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'desc',
        fields: () => ({
            foo: {
                type: GraphQLString,
                description: 'foo description',
            },
        }),
    }),
});

const query = `
    {
        foo
    }
`;

const resolvers = {
    foo: () => 'bar',
};

//console.log('schema', printSchema(schema));

graphql(schema, query, resolvers)
    .then(result => console.log('result', result))
    .catch(error => console.log('error', error));
