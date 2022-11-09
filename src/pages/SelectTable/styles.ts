import styled from "styled-components";
import { solidBlack } from "../../theme/colors";

export const LogoTitle = styled.h1`
  margin-top: 50px;
  font-size: 1.5em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif; ;
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-size: 1.4em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif; ;
`;

export const TableSelecter = styled.select`
  margin-top: 15px;
  width: 100px;
  height: 30px;
  max-width: 90%;
  border-radius: 15px;
  border-color: ${solidBlack};
  text-align: center;
  font-size: 1.1em;
  margin: 25px;
`;

export const TableOption = styled.option``;

export const TableImage = styled.img`
  height: 250px;
`;

export const Footer = styled.footer`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 15px;
`;