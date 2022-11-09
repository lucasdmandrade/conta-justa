import React from "react";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { SubTitle, Title } from "./styles";

const HandleTable = () => {
  return (
    <MainContainer>
      <Header />
      <Title>Monte a mesa</Title>
      <SubTitle>Adicione cada cliente da mesa</SubTitle>
    </MainContainer>
  );
};

export default HandleTable;
