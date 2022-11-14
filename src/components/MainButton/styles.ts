import styled from "styled-components";
import { solidBlue, solidDarkBlue } from "../../theme/colors";

export const Button = styled.button<{
  width?: string;
  margin?: string;
  removeMaxWidth?: boolean;
}>`
  width: ${({ width }) => (width ? width : "250px")};
  height: 30px;
  max-width: ${({ removeMaxWidth }) => (removeMaxWidth ? "100%" : "90%")};
  background-color: ${solidBlue};
  border-radius: 15px;
  border-color: ${solidBlue};
  margin: ${({ margin }) => (margin ? margin : 0)};
  text-align: center;
  font-size: 1.1em;
  color: white;
  transition: 0.3s;
  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${solidDarkBlue};
    border-color: ${solidDarkBlue};
    cursor: pointer;
  }
`;
