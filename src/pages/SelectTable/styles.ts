import styled from "styled-components";
import { solidBlack } from "../../theme/colors";

export const LogoTitle = styled.h1`
  margin-top: 50px;
  font-size: 1.5em;
  text-align: center;
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-size: 1.4em;
`;

export const TableSelecter = styled.select`
  margin-top: 15px;
  width: 100px;
  max-width: 90%;
  border-radius: 15px;
  border-color: ${solidBlack};
  text-align: center;
  font-size: 1.1em;
  margin: 25px;
  padding: 5px;
`;

export const TableOption = styled.option``;

export const TableImage = styled.img`
  height: 250px;
`;
