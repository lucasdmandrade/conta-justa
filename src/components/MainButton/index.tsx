import { Button } from "./styles";

const MainButton = ({
  children,
  width,
}: {
  children: React.ReactNode;
  width?: string;
}) => {
  return <Button width={width}>{children}</Button>;
};

export default MainButton;
