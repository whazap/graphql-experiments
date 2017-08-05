
import styled from 'styled-components';

export const MediaList = styled.ul`
    --columns: 1;
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 0 0 20px;
    padding: 0;
    list-style: none;
    text-align: left;

    @media (min-width: 480px) {
        --columns: 2;
    }

    @media (min-width: 768px) {
        --columns: 3;
    }

    @media (min-width: 960px) {
        --columns: 4;
    }
`;

export const MediaListItem = styled.li`
    display: block;
`;
