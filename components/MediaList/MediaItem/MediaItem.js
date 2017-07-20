
import React from 'react';
import PropTypes from 'prop-types';
import { MediaItem, MediaItemTitle, MediaItemImage, MediaItemViewerCount } from './styles';

const MediaItemComponent = ({ name, title, thumbnail, viewers }) => (
    <MediaItem
        url={name}
    >
        <MediaItemTitle>
            {title}
        </MediaItemTitle>
        <MediaItemImage
            src={thumbnail}
        />
        <MediaItemViewerCount>
            {viewers}
        </MediaItemViewerCount>
    </MediaItem>
);
MediaItemComponent.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    viewers: PropTypes.number,
};
MediaItemComponent.defaultProps = {
    viewers: 0,
};

export default MediaItemComponent;
