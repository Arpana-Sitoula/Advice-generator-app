import { Text } from "@chakra-ui/react";

interface AdvProps {
  advice: any;
}

const Advice = ({ advice }: AdvProps) => {
  return <Text color="cyan.50">{advice}</Text>;
};

export default Advice;
