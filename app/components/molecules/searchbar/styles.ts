import styled from "styled-components";
import { Button } from "../../atoms/Buttons/Button";

export const SearchBarWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SearchBarButton = styled(Button)`
  margin-left: 8px;
  padding: 8px 16px;
`;

export const ClearButton = styled(Button)`
  background-color: blue;
  margin-left: 8px;
  padding: 8px 16px;
`;
