
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import MediaList from './MediaList';
import './App.css';

const MediaListWithData1 = graphql(gql`
    query {
        medias(limit: 1) {
            status,
            thumbnail
        }
    }
`)(MediaList);

const MediaListWithData2 = graphql(gql`
    query {
        medias(limit: 2) {
            status,
            thumbnail
        }
    }
`)(MediaList);

const MediaListWithData3 = graphql(gql`
    query {
        medias(limit: 3) {
            status,
            thumbnail
        }
    }
`)(MediaList);

const MediaListWithData4 = graphql(gql`
    query {
        medias(limit: 4) {
            status,
            thumbnail
        }
    }
`)(MediaList);

class App extends Component {
  render() {
    return (
      <div className="App">
          <MediaListWithData1 />
          <MediaListWithData2 />
          <MediaListWithData3 />
          <MediaListWithData4 />
      </div>
    );
  }
}

export default App;
