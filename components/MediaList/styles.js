
import styled from 'styled-components';

export const MediaList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: left;
    overflow: scroll;
`;

export const MediaListItem = styled.li`
    display: inline-block;
    padding: 0 20px 20px 0;
    width: 25%;
    flex: 1 1 25%;
    min-width: 290px;
    max-width: 400px;
`;
