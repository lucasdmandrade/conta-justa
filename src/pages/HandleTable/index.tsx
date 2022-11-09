import React, { useEffect, useState } from "react";
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
import { IClient, ITable } from "../../types/Tables";
import { getSesstionTable } from "../../utils/getSessionTable";
import { tab } from "@testing-library/user-event/dist/tab";
import { table } from "console";

const HandleTable = ({
  tables,
  setTables,
}: {
  tables: ITable[];
  setTables: React.Dispatch<React.SetStateAction<ITable[]>>;
}) => {
  const [newClient, setNewClient] = useState("");

  const addNewClient = () => {
    if (!newClient) {
      return false;
    }

    let handleTables = tables;
    handleTables[getSesstionTable()].clients?.push({
      name: newClient,
      personalValue: 0,
    });
    setTables(handleTables);
    setNewClient("");
  };

  const listTableClients = () => {
    return tables[getSesstionTable()].clients?.map((client, key) => (
      <ClientInputContainer isList>
        <ClientInput isList key={key} readOnly value={client.name} />
        <MainButton width="75px">
          <ClientButtonIcon src={TrashIcon} alt="Icone de lixo" />
        </MainButton>
      </ClientInputContainer>
    ));
  };

  useEffect(() => {
    console.log(tables);
  }, [tables]);

  useEffect(() => {
    console.log(newClient);
  }, [newClient]);

  return (
    <MainContainer>
      <>
        <Header PreviousPage="/" />
        <Title>
          Monte a mesa {window.sessionStorage.getItem("sessionTable")}
        </Title>
        <SubTitle>Adicione cada cliente da mesa</SubTitle>

        {listTableClients()}
        <ClientInputContainer>
          <ClientInput
            placeholder="Nome"
            onChange={(e) => setNewClient(e.target.value)}
            value={newClient}
          />
          <MainButton onClick={addNewClient} width="75px">
            <ClientButtonIcon src={PlusIcon} alt="Icone de soma" />
          </MainButton>
        </ClientInputContainer>
      </>
    </MainContainer>
  );
};

export default HandleTable;
