
const express = require('express');
const next = require('next');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.use('/graphql', cors());
        server.use('/graphql', graphqlHTTP({
            schema,
            graphiql: true,
        }));

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, (err) => {
            if (err) {
                throw err;
            }

            console.log(`Listening on http://localhost:${PORT}`);
        });
    });
