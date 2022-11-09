import styled from "styled-components";
import { defaultFontFamily } from "../../theme/text";
import { smokeGray } from "../../theme/colors";

export const OverContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${smokeGray};
`;

export const Container = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-family: ${defaultFontFamily};
  font-weight: lighter;
  padding-top: "50px";
`;
