
import React from 'react';
import MediaListWithData from './MediaList';

const AppComponent = () => (
    <div>
        <MediaListWithData limit="1" />
        <MediaListWithData limit="2" />
        <MediaListWithData limit="3" />
        <MediaListWithData limit="4" />
    </div>
);

export default AppComponent;
