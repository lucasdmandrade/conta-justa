import React from "react";
import MainButton from "../../components/MainButton";
import MainContainer from "../../components/MainContainer";
import Table from "../../assets/images/table.svg";
import {
  Footer,
  LogoTitle,
  TableImage,
  TableOption,
  TableSelecter,
  Title,
} from "./styles";

const SelectTable = () => {
  return (
    <MainContainer>
      <LogoTitle>Retaurante Conta Justa</LogoTitle>
      <Title>Selecionar mesa</Title>
      <TableSelecter>
        <TableOption>1</TableOption>
        <TableOption>2</TableOption>
        <TableOption>3</TableOption>
        <TableOption>4</TableOption>
      </TableSelecter>

      <TableImage src={Table} alt="Imagem de mesa de restaurante" />

      <Footer>
        <a href="/monta-mesa">
          <MainButton>Próximo</MainButton>
        </a>
      </Footer>
    </MainContainer>
  );
};

export default SelectTable;
