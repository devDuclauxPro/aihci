import { Box, Container } from "@mui/material";
import { WhoHeaderNomber } from "./whoHeaderNomber";

// Composant QuiSommesHeader représente l'en-tête de la section Qui Sommes-Nous.
export const WhoAreHeader = () => {
  return (
    <Box paddingTop={10} paddingBottom={3} bgcolor="#F7F7F7">
      <Container maxWidth="lg">
        <WhoHeaderNomber />
      </Container>
    </Box>
  );
};
