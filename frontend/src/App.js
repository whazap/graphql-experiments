
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import MediaList from './MediaList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MediaList
              data={{
                  loading: false,
                  medias: [
                      {
                          status: '1',
                          thumbnail: '/static/img/media/live/sscaitournament_mid_000.jpg',
                      },
                      {
                          status: '2',
                          thumbnail: '/static/img/media/live/sscaitournament_mid_000.jpg',
                      },
                      {
                          status: '3',
                          thumbnail: '/static/img/media/live/sscaitournament_mid_000.jpg',
                      },
                  ],
              }}
          />
      </div>
    );
  }
}

export default App;
