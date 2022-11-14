import {
  ArrowBackImage,
  ArrowBackImageContainer,
  Container,
  LogoTitle,
} from "./styles";
import ArrowBack from "../../assets/icons/arrowBack.svg";
import { Link } from "react-router-dom";

const Header = ({ PreviousPage }: { PreviousPage: string }) => {
  return (
    <Container>
      <LogoTitle>Restaurante Preço Justo</LogoTitle>
      <ArrowBackImageContainer>
        <Link to={PreviousPage}>
          <ArrowBackImage src={ArrowBack} alt="Ícone de voltar" />
        </Link>
      </ArrowBackImageContainer>
    </Container>
  );
};

export default Header;
