
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const MediaItemImage = styled.img
    .attrs({
        alt: props => props.alt,
        src: props => props.src,
    })`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        transition: opacity .35s;
    `;
MediaItemImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};
MediaItemImage.defaultProps = {
    alt: '',
};

export const MediaItem = styled.a
    .attrs({
        href: props => `https://www.smashcast.tv/${props.url}`,
        target: '_blank',
    })`
        position: relative;
        display: block;
        padding-top: 56.25%;
        background-color: gray;
        color: #fff;
        overflow: hidden;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            top: 0;
            background: linear-gradient(195deg, transparent 50%, rgba(0, 0, 0, .9) 90%);
            z-index: 2;
        }

        &:hover ${MediaItemImage} {
            opacity: .8;
        }
    `;
MediaItem.propTypes = {
    url: PropTypes.string.isRequired,
};

export const MediaItemTitle = styled.h1`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 16px 12px;
    font-size: 16px;
    font-weight: normal;
    z-index: 4;
`;

export const MediaItemViewerCount = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 5px 9px;
    font-size: 12px;
    white-space: nowrap;
    background: rgba(0, 0, 0, .6);
    color: #eb5055;
    font-weight: 600;
    z-index: 10;

    &:before {
        content: '';
        display: inline-block;
        height: 5px;
        width: 5px;
        margin-right: 5px;
        border-radius: 5px;
        background: #eb5055;
    }
`;
