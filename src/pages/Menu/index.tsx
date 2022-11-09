import React from "react";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { SubTitle, Title } from "./styles";
import { ITable } from "../../types/Tables";
import Footer from "../../components/Footer";
import { getSesstionTable } from "../../utils/getSessionTable";

const Menu = ({
  tables,
  setTables,
}: {
  tables: ITable[];
  setTables: React.Dispatch<React.SetStateAction<ITable[]>>;
}) => {
  return (
    <MainContainer>
      <Header PreviousPage="/monta-mesa" />
      <Title>Menu</Title>
      <SubTitle>Mesa {getSesstionTable()}</SubTitle>

      <Footer NextPage="/monta-mesa" />
    </MainContainer>
  );
};

export default Menu;
