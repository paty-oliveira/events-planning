import styled from "styled-components";

export const EventSummaryContainer = styled.section`
  width: 100%;
  height: 30vh;
  background-image: linear-gradient(to bottom left, #85b6fc, #e4def0);
  h1 {
    margin: 0;
    padding-top: 3rem;
    font-size: 2rem;
    text-align: center;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    color: ${(props) => props.theme.colors["white"]};
  }
`;
