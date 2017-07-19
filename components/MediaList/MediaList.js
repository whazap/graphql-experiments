
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
            {data.medias.map(media => (
                <MediaListItem
                    key={media.id}
                >
                    <MediaItem
                        name={media.name}
                        title={media.title}
                        thumbnail={`https://edge.sf.hitbox.tv${media.thumbnail}`}
                        viewers={media.viewers}
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
