import { ChakraProvider } from "@chakra-ui/react";
import Cardbox from "./ui/molecules/Cardbox";

function App() {
  return (
    <ChakraProvider>
      <Cardbox />
    </ChakraProvider>
  );
}

export default App;
