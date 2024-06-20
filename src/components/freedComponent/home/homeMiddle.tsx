import { Box, Container } from "@mui/material";
import { FC } from "react";
import { MiddleHeader } from "./middleHeader";
import { MiddleMiddle } from "./middleMiddle";

// Composant HomeMiddle qui regroupe les sections MiddleHeader et MiddleMiddle
export const HomeMiddle: FC = () => {
  return (
    <Box bgcolor="#e0e0e0" paddingY={5}>
      <Container maxWidth="lg">
        <MiddleHeader />
        <MiddleMiddle />
      </Container>
    </Box>
  );
};
