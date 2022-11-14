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
import { ITable } from "../../types/Tables";
import { getSesstionTable } from "../../utils/getSessionTable";
import DangerButton from "../../components/DangerButton";
import Footer from "../../components/Footer";

const HandleTable = ({
  tables,
  setTables,
}: {
  tables: ITable[];
  setTables: React.Dispatch<React.SetStateAction<ITable[]>>;
}) => {
  const [newClient, setNewClient] = useState("");
  const [sessionTable, setSessionTable] = useState<ITable>();
  const [controlRender, setControlRender] = useState(true);

  const forceRender = () => {
    setControlRender(!controlRender);
  };

  const addNewClient = () => {
    if (!newClient) {
      return false;
    }

    let handleTables = tables;
    handleTables[getSesstionTable()].clients.push({
      name: newClient,
      personalValue: 0,
    });
    setTables(handleTables);
    setNewClient("");
    forceRender();
  };

  const removeClient = (clientIndex: number) => {
    let handleTables = tables;
    handleTables[getSesstionTable()].clients?.splice(clientIndex, 1);
    setTables(handleTables);
    setControlRender(!controlRender);
    forceRender();
  };

  const listTableClients = () => {
    return sessionTable?.clients?.map((client, key) => (
      <ClientInputContainer isList key={key}>
        <ClientInput isList key={key} readOnly value={client.name} />
        <DangerButton onClick={() => removeClient(key)} width="75px">
          <ClientButtonIcon src={TrashIcon} alt="Icone de lixo" />
        </DangerButton>
      </ClientInputContainer>
    ));
  };

  useEffect(() => {
    setSessionTable(tables[getSesstionTable()]);
  }, [controlRender]);

  return (
    <MainContainer>
      <Header PreviousPage="/" />
      <Title>Monte a mesa {getSesstionTable()}</Title>
      <SubTitle>Adicione cada cliente da mesa</SubTitle>

      {listTableClients()}
      <ClientInputContainer>
        <ClientInput
          placeholder="Nome"
          onChange={(e) => setNewClient(e.target.value)}
          value={newClient}
        />
        <MainButton onClick={addNewClient} width="75px">
          <ClientButtonIcon src={PlusIcon} alt="Ícone de soma" />
        </MainButton>
      </ClientInputContainer>

      <Footer NextPage="/menu" />
    </MainContainer>
  );
};

export default HandleTable;
