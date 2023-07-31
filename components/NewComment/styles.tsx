import styled from "styled-components";

export const NewCommentForm = styled.form`
  margin: 2rem auto;
  width: 100%;
  border-radius: 6px;
  background-color: #03be9f;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

export const NewCommentRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const InputContainer = styled.div`
  margin-bottom: 0.5rem;
  flex: 1;
  min-width: 10rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white;
    text-align: left;
  }

  input,
  textarea {
    font: inherit;
    padding: 0.25rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    background-color: #dcfff9;
  }
`;

export const Button = styled.button`
  background-color: white;
`;
