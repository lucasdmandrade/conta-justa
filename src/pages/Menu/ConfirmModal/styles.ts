import styled from "styled-components";
import { darkGrey, smokeGray, solidBlue } from "../../../theme/colors";

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

export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  max-width: 650px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px 25px 0 0;
  border-top: 1px solid ${darkGrey};
  background-color: white;
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-size: 1.5em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif; ;
`;

export const Subtitle = styled.h2`
  margin-top: 15px;
  font-size: 1.3em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif; ;
`;

export const CancelImageContainer = styled.div`
  padding: 10px;
  height: 35px;
  width: 35px;
  border-radius: 50%;

  &:hover {
    opacity: 0.5;
  }
`;

export const CancelImage = styled.img`
  height: 30px;
`;
