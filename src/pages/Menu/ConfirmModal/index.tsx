import MainButton from "../../../components/MainButton";
import CancelIcon from "../../../assets/icons/cancelIcon.svg";
import {
  ButtonsContainer,
  CancelImage,
  CancelImageContainer,
  Modal,
  Modalheader,
  OverviewModal,
  Subtitle,
  Title,
  TittleContainer,
} from "./styles";
import { useEffect, useState } from "react";
import { ITable } from "../../../types/Tables";
import { getSesstionTable } from "../../../utils/getSessionTable";

const ConfirmModal = ({
  product,
  productPrice,
  isVisible,
  hide,
  tables,
  setTables,
  selectClient,
  callback,
}: {
  product: string;
  productPrice: number;
  isVisible: boolean;
  hide: () => void;
  tables: ITable[];
  setTables: React.Dispatch<React.SetStateAction<ITable[]>>;
  selectClient: () => void;
  callback: (alertTitle: string, alertDetails: string) => void;
}) => {
  const [isActiveAnimation, setIsActiveAnimation] = useState(false);

  const addTableProduc = () => {
    let handleTables = tables;
    handleTables[getSesstionTable()].totalValue += productPrice;
    setTables(handleTables);
    callback(
      `Pedido efetuado em nome da mesa ${getSesstionTable()} com sucesso`,
      `Item: ${product}`
    );
    hide();
  };

  const showSelectClientModal = () => {
    selectClient();
    hide();
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
            <Title>Confirmar pedido</Title>
            <Subtitle>Item: {product}</Subtitle>

            <ButtonsContainer>
              <MainButton onClick={() => addTableProduc()} margin="10px">
                Adicinar pedido a mesa
              </MainButton>
              {!!tables[getSesstionTable()].clients.length && (
                <MainButton
                  onClick={() => showSelectClientModal()}
                  margin="10px"
                >
                  Adicinar pedido ao cliente
                </MainButton>
              )}
            </ButtonsContainer>
          </Modal>
        </OverviewModal>
      )}
    </>
  );
};

export default ConfirmModal;
