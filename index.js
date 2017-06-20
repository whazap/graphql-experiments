
const {
    graphql,
    buildSchema,
} = require('graphql');

const schema = buildSchema(`
    type User {
        id: ID
        name: String
        age: Int,
        isAdmin: Boolean
    }

    type Query {
        user: User
    }
`);

const query = `
    {
        user {
            id,
            name,
            age,
            isAdmin
        }
    }
`;

const resolvers = {
    user: () => ({
        id: '1',
        name: 'whazap',
        age: 35,
        isAdmin: true,
    })
};

graphql(schema, query, resolvers)
    .then(result => console.log('result', result))
    .catch(error => console.log('error', error));
