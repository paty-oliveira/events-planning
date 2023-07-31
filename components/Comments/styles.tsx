import styled from "styled-components";

export const CommentsSection = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
  text-align: center;
`;

export const Button = styled.button`
  font: inherit;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #03be9f;
  border: 1px solid #03be9f;
  cursor: pointer;

  &:hover, &:active {
    background-color: #dcfff9;
  }
`;
