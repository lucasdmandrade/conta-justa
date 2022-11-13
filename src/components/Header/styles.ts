import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
`;

export const LogoTitle = styled.h1`
  padding: 10px;
  font-size: 1.5em;
`;

export const ArrowBackImageContainer = styled.div`
  padding: 10px;
  height: 35px;
  width: 35px;
  border-radius: 50%;

  &:hover {
    opacity: 0.5;
  }
`;

export const ArrowBackImage = styled.img`
  height: 30px;
`;
