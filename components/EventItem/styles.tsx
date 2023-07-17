import styled from "styled-components";

export const EventCard = styled.li`
    border: solid black 1px;
    list-style: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const EventLinkContainer = styled.div`
    a {
        text-decoration: none;
        font-weight: bolder;
        color: blue;
        cursor: pointer;
    }
`