
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MediaItem = ({ title, thumbnail }) => (
    <div className="media-item">
        <h1 className="media-item__title">
            {title}
        </h1>
        <div
            className="media-item__image"
            style={{ backgroundImage: `url(${thumbnail})` }}
        />
    </div>
);
MediaItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};

export default MediaItem;
