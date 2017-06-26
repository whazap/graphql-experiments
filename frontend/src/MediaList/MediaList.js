
import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from './MediaItem';
import './styles.css';

const MediaList = ({ data }) => {
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
        <ul className="media-list">
            {data.medias.map(user => (
                <li
                    key={user.id}
                    className="media-list__item"
                >
                    <MediaItem
                        title={user.title}
                        thumbnail={`https://edge.sf.hitbox.tv${user.thumbnail}`}
                    />
                </li>
            ))}
        </ul>
    );
};
MediaList.propTypes = {
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
MediaList.defaultProps = {
    data: {
        loading: true,
        error: null,
        medias: [],
    },
};

export default MediaList;
