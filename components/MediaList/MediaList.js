
import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from './MediaItem';
import { MediaList, MediaListItem } from './styles';

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
                        language={media.language}
                        game={media.game}
                        gameSlug={media.gameSlug}
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
