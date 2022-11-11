import styled from "styled-components";
import { darkGrey } from "../../theme/colors";

export const OverviewModal = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 998;
  width: 100%;
  max-width: 650px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Modal = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  max-width: 650px;
  height: ${({ isVisible }) => (isVisible ? "200px" : 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 15px;
  border-radius: 25px 25px 0 0;
  border-top: 1px solid ${darkGrey};
  background-color: white;

  transition: height 1s;
`;

export const Modalheader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 1.5em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  margin: 5px;
`;

export const Subtitle = styled.h2`
  margin-top: 15px;
  font-size: 1.3em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  margin: 5px;
`;

export const CancelImageContainer = styled.div`
  padding: 10px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

export const CancelImage = styled.img`
  height: 30px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 15px;
`;
