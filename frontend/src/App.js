
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import MediaList from './MediaList';
import './App.css';

const MediaListWithData = graphql(gql`
    query($limit: Int) {
        medias(limit: $limit) {
            title:status,
            thumbnail
        }
    }
`, {
    options: (props) => ({
        variables: {
            limit: props.limit,
        },
    }),
})(MediaList);

class App extends Component {
    render() {
        return (
            <div className="App">
                <MediaListWithData limit="1" />
                <MediaListWithData limit="2" />
                <MediaListWithData limit="3" />
                <MediaListWithData limit="4" />
            </div>
        );
    }
}

export default App;
