
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
        user: User,
        users: [User]
    }
`);

const query = `
    {
        users {
            id,
            name,
            age,
            isAdmin
        }
    }
`;

const users = [
    {
        id: '1',
        name: 'whazap',
        age: 35,
        isAdmin: true,
    },
    {
        id: '2',
        name: 'wh4z4p',
        age: 20,
        isAdmin: false,
    },
];

const resolvers = {
    user: () => ({
        id: '1',
        name: 'whazap',
        age: 35,
        isAdmin: true,
    }),
    users: () => users,
};

graphql(schema, query, resolvers)
    .then(result => console.log('result', result))
    .catch(error => console.log('error', error));
