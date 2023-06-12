import { Card, Center } from "@chakra-ui/react";
import Dice from "../atoms/Dice";
import Divider from "../atoms/Divider";
import AdviceId from "../atoms/AdviceId";
import Advice from "../atoms/Advice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Advice {
  id: number;
  advice: string;
}

const Cardbox = () => {
  const fetchAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const data = response.data;
    return data;
  };
  const fetchData = useQuery({
    queryKey: ["advice"],
    queryFn: fetchAdvice,
  });

  if (fetchData.isError) return <h1>Error loading data</h1>;
  if (fetchData.isLoading) return <h1>Loading.......</h1>;

  const adviceObj = fetchData.data;

  return (
    <Card position="relative" bg="gray.600">
      <Center>
        <AdviceId id={adviceObj?.slip?.id} />
      </Center>
      <Center>
        <Advice advice={adviceObj?.slip?.advice} />
      </Center>
      <Divider />
      <Center>
        <Dice />
      </Center>
      {adviceObj.slip.id}
    </Card>
  );
};

export default Cardbox;
