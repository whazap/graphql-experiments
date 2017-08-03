
import styled from 'styled-components';

export const MediaList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 0 20px;
    padding: 0;
    list-style: none;
    text-align: left;

    @media (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 960px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export const MediaListItem = styled.li`
    display: block;
`;
