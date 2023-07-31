import styled from "styled-components";

export const CommentsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Comment = styled.li`
  text-align: left;
  padding: 0.5rem 0;
  border-bottom: 2px solid #ccc;

  p {
    margin: 0;
  }

  div {
    text-align: right;
    font-style: italic;
  }

  address {
    display: inline;
  }
`;
