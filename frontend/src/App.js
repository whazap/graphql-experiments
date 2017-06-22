
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import MediaList from './MediaList';
import './App.css';

const MediaListWithData = graphql(gql`
    query {
        medias {
            status,
            thumbnail
        }
    }
`)(MediaList);

class App extends Component {
  render() {
    return (
      <div className="App">
          <MediaListWithData />
      </div>
    );
  }
}

export default App;
