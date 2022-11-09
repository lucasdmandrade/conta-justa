import { Container, OverContainer } from "./styles";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <OverContainer>
      <Container>{children}</Container>
    </OverContainer>
  );
};

export default MainContainer;
