import styled from "styled-components";
import { danger, dangerDark } from "../../theme/colors";

export const Button = styled.button<{ width?: string }>`
  width: ${({ width }) => (width ? width : "250px")};
  height: 30px;
  max-width: 90%;
  background-color: ${danger};
  border-radius: 15px;
  border-color: ${danger};
  text-align: center;
  font-size: 1.1em;
  color: white;
  transition: 0.3s;

  &:hover {
    background-color: ${dangerDark};
    border-color: ${dangerDark};
    cursor: pointer;
  }
`;
