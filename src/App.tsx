import { Container, ChakraProvider } from "@chakra-ui/react";
import Cardbox from "./ui/molecules/Cardbox";

function App() {
  return (
    <ChakraProvider>
      <Container bg="blue.800">
        <Cardbox />
      </Container>
    </ChakraProvider>
  );
}

export default App;
