
const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

const getGame = ({ id, name }) => {
    let query = id;

    if (name) {
        query = `${name}?seo=true`;
    }

    return fetch(`https://api.smashcast.tv/game/${query}`)
        .then(resp => resp.json())
        .then(json => json.category);
};

const Game = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve: game => game.category_id,
        },
        name: {
            type: GraphQLString,
            resolve: game => game.category_name,
        },
        slug: {
            type: GraphQLString,
            resolve: game => game.category_seo_key,
        },
    }),
});

const field = {
    type: Game,
    description: 'game descr',
    args: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
    },
    resolve: (_, args) => getGame(args),
};

module.exports = {
    default: Game,
    field,
};
