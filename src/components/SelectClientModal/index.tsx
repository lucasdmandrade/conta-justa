import MainButton from "../../components/MainButton";
import CancelIcon from "../../assets/icons/cancelIcon.svg";
import {
  ButtonsContainer,
  CancelImage,
  CancelImageContainer,
  ClientOption,
  ClientSelecter,
  Modal,
  Modalheader,
  OverviewModal,
  Title,
} from "./styles";
import { useEffect, useState } from "react";
import { ITable } from "../../types/Tables";
import { getSesstionTable } from "../../utils/getSessionTable";

const SelectClientModal = ({
  isVisible,
  hide,
  product,
  productPrice,
  tables,
  setTables,
  callback,
}: {
  isVisible: boolean;
  hide: () => void;
  product: string;
  productPrice: number;
  tables: ITable[];
  setTables: React.Dispatch<React.SetStateAction<ITable[]>>;
  callback: (alertTitle: string, alertDetails: string) => void;
}) => {
  const [isActiveAnimation, setIsActiveAnimation] = useState(false);
  const [selectedCLient, setSelectedCLient] = useState(0);

  const addClientProduc = () => {
    let handleTables = tables;
    if (!handleTables[getSesstionTable()].clients?.length) {
      return;
    }
    handleTables[getSesstionTable()].clients[selectedCLient].personalValue +=
      productPrice;

    setTables(handleTables);
    callback(
      `Pedido efetuado em nome de ${
        handleTables[getSesstionTable()].clients[selectedCLient].name
      }`,
      `Item: ${product}`
    );
    hide();
    setSelectedCLient(0);
  };

  useEffect(() => {
    setIsActiveAnimation(isVisible);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <OverviewModal>
          <Modal isVisible={isActiveAnimation}>
            <Modalheader>
              <CancelImageContainer>
                <CancelImage
                  onClick={() => hide()}
                  src={CancelIcon}
                  alt="Icone de cancelar pedido"
                />
              </CancelImageContainer>
            </Modalheader>
            <Title>Selecione o cliente</Title>

            <ClientSelecter
              onChange={(e) => setSelectedCLient(Number(e.target.value))}
            >
              {tables[getSesstionTable()].clients?.map((client, key) => (
                <ClientOption value={key} key={key}>
                  {client.name}
                </ClientOption>
              ))}
            </ClientSelecter>

            <ButtonsContainer>
              <MainButton onClick={() => addClientProduc()} margin="10px">
                Adicionar pedido
              </MainButton>
            </ButtonsContainer>
          </Modal>
        </OverviewModal>
      )}
    </>
  );
};

export default SelectClientModal;
