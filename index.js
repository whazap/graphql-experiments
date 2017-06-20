
const {
    graphql,
    buildSchema,
} = require('graphql');

const schema = buildSchema(`
    type Query {
        id: ID
        name: String
        age: Int,
        isAdmin: Boolean
    }
`);

const query = `
    {
        id,
        name,
        age,
        isAdmin
    }
`;

const resolvers = {
    id: () => '1',
    name: () => 'whazap',
    age: () => 35,
    isAdmin: () => true,
};

graphql(schema, query, resolvers)
    .then(result => console.log('result', result))
    .catch(error => console.log('error', error));
