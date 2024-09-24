import styled from "styled-components";

export const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
