import styled from "styled-components";
import { solidBlack } from "../../theme/colors";

export const LogoTitle = styled.h1`
  margin-top: 50px;
  font-size: 1.5em;
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-size: 1.5em;
`;

export const SubTitle = styled.h3`
  margin-top: 5px;
  font-size: 1.3em;
  text-align: center;
`;

export const ClientInputContainer = styled.div<{ isList?: boolean }>`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: ${({ isList }) => (isList ? "20px" : "35px")};
`;

export const ClientInput = styled.input<{ isList?: boolean }>`
  width: 350px;
  height: 30px;
  max-width: 80%;
  border-radius: 15px;
  border-color: ${solidBlack};
  margin-right: 10px;
  margin-left: 5px;
  text-align: center;
  font-size: 1.1em;
  opacity: ${({ isList }) => (isList ? 0.7 : 1)};
`;

export const ClientButtonIcon = styled.img`
  height: 20px;
`;
