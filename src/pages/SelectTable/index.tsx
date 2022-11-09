import React, { useEffect, useState } from "react";
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

import { ITable } from "../../types/Tables";
import { Link } from "react-router-dom";

const SelectTable = ({ tables }: { tables: ITable[] }) => {
  const [sessionTable, setSessionTable] = useState("");

  useEffect(() => {
    console.log(sessionTable);
    window.sessionStorage.setItem("sessionTable", sessionTable);
  }, [sessionTable]);

  return (
    <MainContainer>
      <LogoTitle>Retaurante Conta Justa</LogoTitle>
      <Title>Selecionar mesa</Title>
      <TableSelecter onChange={(e) => setSessionTable(e.target.value)}>
        {tables.map((table, key) => (
          <TableOption>{key}</TableOption>
        ))}
      </TableSelecter>

      <TableImage src={Table} alt="Imagem de mesa de restaurante" />

      <Footer>
        <Link to="/monta-mesa">
          <MainButton>Próximo</MainButton>
        </Link>
      </Footer>
    </MainContainer>
  );
};

export default SelectTable;
