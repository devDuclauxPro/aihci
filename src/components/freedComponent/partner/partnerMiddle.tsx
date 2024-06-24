import { Box, Container } from "@mui/material";
import { CardArticleGeneric } from "components/generic/cardArticleGeneric";
import offresPartenaires from "images/offres-partenaires.png";
import { FC } from "react";

// Composant PartenaireMiddle affiche une liste de cartes représentant les partenaires ou les offres.
export const PartnerMiddle: FC = () => {
  const offresImage = offresPartenaires;

  return (
    <Container maxWidth="lg">
      <Box paddingY={3} display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ width: { xs: 300 } }} paddingX={5}>
          <img width="100%" style={{ objectFit: "cover" }} src={offresImage} alt="Offres des partenaires" />
        </Box>
      </Box>
      <Box marginBottom={3}>
        <CardArticleGeneric />
      </Box>
    </Container>
  );
};
