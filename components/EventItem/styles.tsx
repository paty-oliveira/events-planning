import styled from "styled-components";

export const EventCard = styled.li`
    border: solid black 1px;
    list-style: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 1px 4px ${(props) => props.theme.colors["grey"]["000"] }, 0 1px 12px 2px ${(props) => props.theme.colors["grey"]["400"] };
    border-radius: 3%;
    background-color: ${(props) => props.theme.colors["purple"]["000"]};

    img {
        object-fit: cover;
        width: 100%;
        height: 10rem;
    }

    h3 {
        color: ${(props) => props.theme.colors["blue"]["800"]};
        font-weight: bolder;
    }

    h4 {
        color: ${(props) => props.theme.colors["blue"]["600"]};
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
        color: ${(props) => props.theme.colors["green"]["600"]};
        cursor: pointer;
    }
`