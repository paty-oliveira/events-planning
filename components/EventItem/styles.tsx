import styled from "styled-components";

export const EventCard = styled.li`
    border: solid black 1px;
    list-style: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
    border-radius: 3%;

    img {
        object-fit: cover;
        width: 100%;
        height: 10rem;
    }

    h3 {
        color: #443f40;
        font-weight: bolder;
    }

    h4 {
        color: #666666;
        font-weight: bold;
    }

    .icon {
        margin-right: 0.5rem;
    }
`;

export const EventLinkContainer = styled.div`
    width: 100%;
    text-align: center;

    a {
        text-decoration: none;
        font-weight: bolder;
        color: blue;
        cursor: pointer;
    }
`