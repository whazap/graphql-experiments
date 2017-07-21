
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const {
    graphqlExpress,
    graphiqlExpress,
} = require('apollo-server-express');
const schema = require('./graphql/schema');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
        server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

        server.get('*', (req, res) => handle(req, res));

        server.listen(PORT, (err) => {
            if (err) {
                throw err;
            }

            console.log(`Listening on http://localhost:${PORT}`);
        });
    });
