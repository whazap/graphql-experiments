
import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from './MediaItem';
import { MediaList, MediaListItem } from './styles';

const MediaListComponent = ({ medias }) => (
    <MediaList>
        {medias.map(media => (
            <MediaListItem
                key={media.id}
            >
                <MediaItem
                    name={media.name}
                    title={media.title}
                    thumbnail={`https://edge.sf.hitbox.tv${media.thumbnail}`}
                    viewers={media.viewers}
                    language={media.language}
                    game={media.game.name}
                    gameSlug={media.game.slug}
                />
            </MediaListItem>
        ))}
    </MediaList>
);
MediaListComponent.propTypes = {
    medias: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            viewers: PropTypes.number.isRequired,
            language: PropTypes.string,
            game: PropTypes.shape({
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
            }),
        }),
    ),
};
MediaListComponent.defaultProps = {
    medias: [],
};

export default MediaListComponent;
