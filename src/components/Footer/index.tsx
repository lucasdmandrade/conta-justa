import { FooterContainer } from "./styles";
import { Link } from "react-router-dom";
import MainButton from "../MainButton";

const Footer = ({ NextPage }: { NextPage: string }) => {
  return (
    <FooterContainer>
      <Link to={NextPage}>
        <MainButton>Próximo</MainButton>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
