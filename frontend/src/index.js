import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import 'normalize.css/normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:3001/graphql',
    }),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

registerServiceWorker();
