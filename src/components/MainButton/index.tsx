import { Button } from "./styles";

const MainButton = ({
  children,
  width,
  margin,
  onClick,
  disabled,
  removeMaxWidth,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  margin?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  removeMaxWidth?: boolean;
}) => {
  return (
    <Button
      removeMaxWidth={removeMaxWidth}
      disabled={disabled}
      onClick={onClick}
      width={width}
      margin={margin}
    >
      {children}
    </Button>
  );
};

export default MainButton;
