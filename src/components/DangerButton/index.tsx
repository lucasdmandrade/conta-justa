import { Button } from "./styles";

const DangerButton = ({
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

export default DangerButton;
