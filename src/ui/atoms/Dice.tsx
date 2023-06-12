import { Box, Circle, Image } from "@chakra-ui/react";
import dice from "../../assets/img/icon-dice.svg";

interface DiceProps {
  onClick: any;
}
const Dice = ({ onClick }: DiceProps) => {
  return (
    <Box cursor="pointer" onClick={onClick}>
      <Circle size="50px" bg="green.300">
        <Image src={dice} boxSize="20px" />
      </Circle>
    </Box>
  );
};

export default Dice;
