
import React from 'react';
import PropTypes from 'prop-types';
import {
    MediaItem,
    MediaItemImage,
    MediaItemContent,
    MediaItemTitle,
    MediaItemMeta,
    MediaItemMetaChannelLink,
    MediaItemMetaLanguageLink,
    MediaItemMetaGameLink,
    MediaItemViewerCount,
} from './styles';

const MediaItemComponent = ({ name, title, thumbnail, viewers, language, game, gameSlug }) => (
    <MediaItem>
        <MediaItemContent>
            <MediaItemTitle
                url={name}
            >
                {title}
            </MediaItemTitle>
            <MediaItemMeta>
                <MediaItemMetaChannelLink
                    url={name}
                >
                    ProdotaEN
                </MediaItemMetaChannelLink>
                {language ? (
                    <MediaItemMetaLanguageLink
                        url={language}
                    >
                        {language}
                    </MediaItemMetaLanguageLink>
                ) : null}
                {(game && gameSlug) ? (
                    <MediaItemMetaGameLink
                        url={gameSlug}
                    >
                        {game}
                    </MediaItemMetaGameLink>
                ) : null}
            </MediaItemMeta>
        </MediaItemContent>
        <MediaItemViewerCount>
            {viewers}
        </MediaItemViewerCount>
        <MediaItemImage
            src={thumbnail}
        />
    </MediaItem>
);
MediaItemComponent.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    viewers: PropTypes.number,
    language: PropTypes.string,
    game: PropTypes.string,
    gameSlug: PropTypes.string,
};
MediaItemComponent.defaultProps = {
    viewers: 0,
    language: null,
    game: null,
    gameSlug: null,
};

export default MediaItemComponent;
