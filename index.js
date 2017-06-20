
const {
    graphql,
    buildSchema,
} = require('graphql');

const schema = buildSchema(`
    type Query {
        foo: String
    }

    type Schema {
        query: Query
    }
`);

const query = `
    {
        foo
    }
`;

const resolvers = {
    foo: () => 'bar',
};

graphql(schema, query, resolvers)
    .then(result => console.log('result', result))
    .catch(error => console.log('error', error));
