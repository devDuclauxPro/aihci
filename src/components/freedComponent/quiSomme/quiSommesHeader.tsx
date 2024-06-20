import { Box, Container } from "@mui/material";
import { QuiHeaderNombre } from "./quiHeaderNombre";

// Composant QuiSommesHeader représente l'en-tête de la section Qui Sommes-Nous.
export const QuiSommesHeader = () => {
  return (
    <Box paddingTop={10} paddingBottom={3} bgcolor="#F7F7F7">
      <Container maxWidth="lg">
        <QuiHeaderNombre />
      </Container>
    </Box>
  );
};
