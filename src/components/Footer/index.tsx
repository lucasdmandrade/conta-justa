import { FooterContainer } from "./styles";
import { Link } from "react-router-dom";
import MainButton from "../MainButton";

const Footer = ({
  NextPage,
  disabled,
  secondAction,
}: {
  NextPage: string;
  disabled?: boolean;
  secondAction?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <FooterContainer>
      <Link to={NextPage}>
        <MainButton onClick={secondAction} disabled={disabled}>
          Próximo
        </MainButton>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
