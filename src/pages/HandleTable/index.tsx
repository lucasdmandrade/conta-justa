import React from "react";
import Header from "../../components/Header";
import MainButton from "../../components/MainButton";
import MainContainer from "../../components/MainContainer";
import {
  ClientButtonIcon,
  ClientInput,
  ClientInputContainer,
  SubTitle,
  Title,
} from "./styles";
import TrashIcon from "../../assets/icons/trashIcon.svg";
import PlusIcon from "../../assets/icons/plus.svg";

const HandleTable = () => {
  return (
    <MainContainer>
      <Header PreviousPage="/" />
      <Title>
        Monte a mesa {window.sessionStorage.getItem("sessionTable")}
      </Title>
      <SubTitle>Adicione cada cliente da mesa</SubTitle>
      <ClientInputContainer>
        <MainButton width="75px">
          <ClientButtonIcon src={TrashIcon} alt="Icone de lixo" />
        </MainButton>
        <ClientInput placeholder="Nome" />
        <MainButton width="75px">
          <ClientButtonIcon src={PlusIcon} alt="Icone de soma" />
        </MainButton>
      </ClientInputContainer>
    </MainContainer>
  );
};

export default HandleTable;
