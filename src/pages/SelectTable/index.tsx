import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import Table from "../../assets/images/table.svg";
import {
  LogoTitle,
  TableImage,
  TableOption,
  TableSelecter,
  Title,
} from "./styles";

import { ITable } from "../../types/Tables";
import Footer from "../../components/Footer";

const SelectTable = ({ tables }: { tables: ITable[] }) => {
  const [sessionTable, setSessionTable] = useState("");

  useEffect(() => {
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

      <Footer NextPage="/monta-mesa" />
    </MainContainer>
  );
};

export default SelectTable;
