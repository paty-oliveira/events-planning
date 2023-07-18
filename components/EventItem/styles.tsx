import styled from "styled-components";

export const EventCard = styled.li`
  border: solid black 1px;
  list-style: none;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  align-items: center;
  box-shadow: 0 1px 4px ${(props) => props.theme.colors["grey"]["000"]},
    0 1px 12px 2px ${(props) => props.theme.colors["grey"]["400"]};
  border-radius: 3%;
  background-color: ${(props) => props.theme.colors["purple"]["000"]};
  gap: 1rem;

  .icon {
    margin-right: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0%.75;

  img {
    object-fit: cover;
    width: 100%;
    height: 10rem;
  }

  h3 {
    color: ${(props) => props.theme.colors["blue"]["800"]};
    font-weight: bolder;
    margin: 0;
  }

  h4 {
    color: ${(props) => props.theme.colors["blue"]["600"]};
    font-weight: bold;
    margin: 0;
  }
`;

export const Button = styled.div`
  width: 95%;
  padding: 0.5rem;
  margin: 0;
  text-align: center;
  border: solid ${(props) => props.theme.colors["green"]["600"]};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors["green"]["600"]};

  a {
    text-decoration: none;
    font-weight: bolder;
    color: ${(props) => props.theme.colors["white"]};
    cursor: pointer;
  }

  &:hover {
    opacity: 0.5;
  }
`;
