import {
  ArrowBackImage,
  ArrowBackImageContainer,
  Container,
  LogoTitle,
} from "./styles";
import ArrowBack from "../../assets/icons/arrowBack.svg";

const Header = () => {
  return (
    <Container>
      <LogoTitle>Retaurante Preço Justo</LogoTitle>
      <ArrowBackImageContainer>
        <ArrowBackImage src={ArrowBack} alt="Icone de voltar" />
      </ArrowBackImageContainer>
    </Container>
  );
};

export default Header;
