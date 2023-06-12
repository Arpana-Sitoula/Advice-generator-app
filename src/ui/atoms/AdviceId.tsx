import { Text } from "@chakra-ui/react";

interface IdProps {
  id: any;
}

const AdviceId = ({ id }: IdProps) => {
  return <Text color="green.300">{id}</Text>;
};

export default AdviceId;
