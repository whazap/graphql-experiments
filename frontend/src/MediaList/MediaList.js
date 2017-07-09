
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaItem from './MediaItem';

const MediaList = styled.ul`
    display: block;
    margin: 0;
    padding: 0;
    text-align: left;
`;

const MediaListItem = styled.li`
    display: inline-block;
    padding: 0 20px 20px 0;
    width: 25%;
`;

const MediaListComponent = ({ data }) => {
    if (data.loading) {
        return (
            <div>Loading</div>
        );
    }

    if (data.error) {
        return (
            <div>An unexpected error occurred</div>
        );
    }

    return (
        <MediaList>
            {data.medias.map(user => (
                <MediaListItem
                    key={user.id}
                >
                    <MediaItem
                        title={user.title}
                        thumbnail={`https://edge.sf.hitbox.tv${user.thumbnail}`}
                    />
                </MediaListItem>
            ))}
        </MediaList>
    );
};
MediaListComponent.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool,
        error: PropTypes.instanceOf(Error),
        medias: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                thumbnail: PropTypes.string.isRequired,
            }),
        ),
    }),
};
MediaListComponent.defaultProps = {
    data: {
        loading: true,
        error: null,
        medias: [],
    },
};

export default MediaListComponent;
