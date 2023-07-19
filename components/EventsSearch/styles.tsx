import styled from "styled-components";

export const FormContainer = styled.form`
  margin: 2rem auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  width: 90%;
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

export const Controls = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const Control = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  label {
    font-weight: bold;
  }

  select {
    font: inherit;
    background-color: white;
    border-radius: 6px;
    width: 70%;
    padding: 0.25rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme.colors["green"]["600"]};
  border: 1px solid ${(props) => props.theme.colors["green"]["600"]};
  color: ${(props) => props.theme.colors["white"]};
  border-radius: 4px;
`;
