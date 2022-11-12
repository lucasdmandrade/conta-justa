import { FooterContainer } from "./styles";
import { Link } from "react-router-dom";
import MainButton from "../MainButton";

const Footer = ({
  NextPage,
  disabled,
}: {
  NextPage: string;
  disabled?: boolean;
}) => {
  return (
    <FooterContainer>
      <Link to={NextPage}>
        <MainButton disabled={disabled}>Próximo</MainButton>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
