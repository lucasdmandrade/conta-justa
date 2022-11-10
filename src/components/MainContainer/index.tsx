import { Container, OverContainer } from "./styles";

const MainContainer = ({
  children,
  isOpaque,
}: {
  children: React.ReactNode;
  isOpaque?: boolean;
}) => {
  return (
    <OverContainer>
      <Container isOpaque={isOpaque}>{children}</Container>
    </OverContainer>
  );
};

export default MainContainer;
