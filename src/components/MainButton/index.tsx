import { Button } from "./styles";

const MainButton = ({
  children,
  width,
  margin,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  margin?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Button disabled={disabled} onClick={onClick} width={width} margin={margin}>
      {children}
    </Button>
  );
};

export default MainButton;
