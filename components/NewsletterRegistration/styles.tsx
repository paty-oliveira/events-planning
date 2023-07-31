import styled from "styled-components";

export const NewsletterSection = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 20rem;

  h2 {
    text-align: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputField = styled.input`
  font: inherit;
  padding: 0.25rem;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #ccc;
  flex: 1;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors["green"]["600"]};
  border: 1px solid ${(props) => props.theme.colors["green"]["600"]};
  border-radius: 6px;
  color: #dafff7;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font: inherit;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors["green"]["600"]};
    border-color: ${(props) => props.theme.colors["green"]["600"]};
  }
`;
