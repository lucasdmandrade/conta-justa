import MainButton from "../../components/MainButton";
import CancelIcon from "../../assets/icons/cancelIcon.svg";
import {
  ButtonsContainer,
  CancelImage,
  CancelImageContainer,
  Modal,
  Modalheader,
  OverviewModal,
  Subtitle,
  Title,
} from "./styles";
import { useEffect, useState } from "react";

const AlertModal = ({
  alert,
  details,
  isVisible,
  hide,
}: {
  alert: string;
  details?: string;
  isVisible: boolean;
  hide: (value: React.SetStateAction<boolean>) => void;
}) => {
  const [isActiveAnimation, setIsActiveAnimation] = useState(false);

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
                  onClick={() => hide(false)}
                  src={CancelIcon}
                  alt="Icone de cancelar pedido"
                />
              </CancelImageContainer>
            </Modalheader>
            <Title>{alert}</Title>
            {details && <Subtitle>{details}</Subtitle>}

            <ButtonsContainer>
              <MainButton onClick={() => hide(false)} margin="10px">
                Entendi
              </MainButton>
            </ButtonsContainer>
          </Modal>
        </OverviewModal>
      )}
    </>
  );
};

export default AlertModal;
