import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardBox = ({ children }: Props) => {
  return (
    <Box borderRadius="lg" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardBox;
