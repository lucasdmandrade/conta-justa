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

export const SubTitle = styled.h3`
  margin-top: 5px;
  font-size: 1.3em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif; ;
`;

export const ClientInputContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ClientInput = styled.input`
  margin-top: 15px;
  width: 350px;
  height: 30px;
  max-width: 90%;
  border-radius: 15px;
  border-color: ${solidBlack};
  text-align: center;
  font-size: 1.1em;
  margin: 25px;
`;

export const ClientButtonIcon = styled.img`
  height: 20px;
`;
