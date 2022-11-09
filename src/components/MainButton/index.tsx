import { Button } from "./styles";

const MainButton = ({
  children,
  width,
  onClick,
}: {
  children: React.ReactNode;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Button onClick={onClick} width={width}>
      {children}
    </Button>
  );
};

export default MainButton;
