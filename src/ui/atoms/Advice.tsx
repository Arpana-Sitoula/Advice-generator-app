import { Text } from "@chakra-ui/react";

interface AdvProps {
  advice: any;
}

const Advice = ({ advice }: AdvProps) => {
  return (
    <Text color="cyan.50" noOfLines={4} px="20px" textAlign="center" mb="2">
      {advice}
    </Text>
  );
};

export default Advice;
