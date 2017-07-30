
import React from 'react';
import { gql, graphql } from 'react-apollo';
import MediaList from './MediaList';

const MediaListWithData = graphql(gql`
    query($limit: Int) {
        medias(limit: $limit) {
            id
            name
            title:status
            thumbnail
            viewers
            language
            game {
                name
                slug
            }
        }
    }
`, {
    options: props => ({
        variables: {
            limit: props.limit,
        },
    }),
})(MediaList);

const AppComponent = () => (
    <div>
        <MediaListWithData limit="1" />
        <MediaListWithData limit="2" />
        <MediaListWithData limit="3" />
        <MediaListWithData limit="4" />
    </div>
);

export default AppComponent;
