import MainButton from "../../../components/MainButton";
import CancelIcon from "../../../assets/icons/cancelIcon.svg";
import {
  CancelImage,
  CancelImageContainer,
  Modal,
  OverviewModal,
  Subtitle,
  Title,
} from "./styles";

const ConfirmModal = ({
  product,
  isVisible,
}: {
  product: string;
  isVisible: boolean;
}) => {
  return (
    <>
      {isVisible && (
        <OverviewModal>
          <Modal>
            <CancelImageContainer>
              <CancelImage src={CancelIcon} alt="Icone de cancelar pedido" />
            </CancelImageContainer>
            <Title>Confirmar pedido</Title>
            <Subtitle>Item: {product}</Subtitle>

            <MainButton>Adicinar pedido a mesa</MainButton>
            <MainButton>Adicinar pedido ao cliente</MainButton>
          </Modal>
        </OverviewModal>
      )}
    </>
  );
};

export default ConfirmModal;
