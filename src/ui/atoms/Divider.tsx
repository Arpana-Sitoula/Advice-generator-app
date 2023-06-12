import { Box, Image } from "@chakra-ui/react";
import divider from "../../assets/img/pattern-divider-desktop.svg";

const Divider = () => {
  return (
    <Box>
      <Image src={divider} width="100%" />
    </Box>
  );
};

export default Divider;
