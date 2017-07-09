
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MediaItem = styled.div`
    position: relative;
    padding-top: 56.25%;
    background-color: gray;
    color: #fff;
    overflow: hidden;
`;

const MediaItemTitle = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    z-index: 2;
`;

const MediaItemImage = styled.img
    .attrs({
        alt: props => props.alt,
        src: props => props.src,
    })`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
    `;
MediaItemImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
MediaItemImage.defaultProps = {
    alt: '',
};

const MediaItemComponent = ({ title, thumbnail }) => (
    <MediaItem>
        <MediaItemTitle>
            {title}
        </MediaItemTitle>
        <MediaItemImage
            src={thumbnail}
        />
    </MediaItem>
);
MediaItemComponent.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};

export default MediaItemComponent;
