
import React from 'react';
import { pure, branch, renderComponent, compose, flattenProp } from 'recompose';
import { gql, graphql } from 'react-apollo';
import MediaList from '../../components/MediaList';

const Loading = () => (
    <div>Loading</div>
);

const Error = () => (
    <div>An unexpected error occurred</div>
);

const displayLoadingState = branch(
    props => props.data.loading,
    renderComponent(Loading),
);

const displayErrorState = branch(
    props => props.data.error,
    renderComponent(Error),
);

const data = graphql(gql`
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
});

const MediaListWithData = compose(
    data,
    displayLoadingState,
    displayErrorState,
    flattenProp('data'),
    pure,
)(MediaList);

export default MediaListWithData;
