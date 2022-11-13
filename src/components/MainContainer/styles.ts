import styled from "styled-components";
import { smokeGray } from "../../theme/colors";

export const OverContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${smokeGray};
`;

export const Container = styled.div<{ isOpaque?: boolean }>`
  background-color: ${({ isOpaque }) =>
    isOpaque ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"};
  box-shadow: 0px 0px 10px;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-weight: lighter;
  padding-top: 20px;
  padding-bottom: 50px;
`;
