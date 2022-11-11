import { Button } from "./styles";

const MainButton = ({
  children,
  width,
  margin,
  onClick,
}: {
  children: React.ReactNode;
  width?: string;
  margin?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Button onClick={onClick} width={width} margin={margin}>
      {children}
    </Button>
  );
};

export default MainButton;
