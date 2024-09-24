import styled from "styled-components";
import { Button } from "../../atoms/button";

export const SearchBarWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBarButton = styled(Button)`
  margin-left: 8px;
  padding: 8px 16px;
`;
