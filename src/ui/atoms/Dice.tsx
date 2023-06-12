import { Box, Circle, Image } from "@chakra-ui/react";
import dice from "../../assets/img/icon-dice.svg";

const Dice = () => {
  return (
    <Box cursor="pointer">
      <Circle size="50px" bg="green.300">
        <Image src={dice} boxSize="20px" />
      </Circle>
    </Box>
  );
};

export default Dice;
