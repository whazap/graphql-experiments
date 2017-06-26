
import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from './MediaItem';
import './styles.css';

const defaultData = {
    loading: true,
    error: null,
    medias: [],
};

const MediaList = ({ data = defaultData }) => {
    if (data.loading) {
        return (
            <div>Loading</div>
        );
    }

    if (data.error) {
        console.log(data.error);
        return (
            <div>An unexpected error occurred</div>
        );
    }

    return (
        <ul className="media-list">
            {data.medias.map((user, i) => console.log('user', user) || (
                <li
                    key={i}
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
        error: PropTypes.string,
        medias: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                thumbnail: PropTypes.string.isRequired,
            }),
        ),
    }),
};

export default MediaList;
