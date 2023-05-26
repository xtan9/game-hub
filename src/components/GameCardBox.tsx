import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardBox = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      border={colorMode === "light" ? "1px" : ""}
      borderColor="gray.200"
    >
      {children}
    </Box>
  );
};

export default GameCardBox;
