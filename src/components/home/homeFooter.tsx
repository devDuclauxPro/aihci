import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ImageSwiper } from "./imageSwiper";
import { listImage } from "./listFilter";

// Composant HomeFooter qui affiche les partenaires soutenant l'association
export const HomeFooter: FC = () => {
  return (
    <Box padding={3}>
      {/* Titre principal */}
      <Typography
        variant="h5"
        component="h1"
        color="#275427"
        textAlign="center"
        fontWeight={500}
        fontSize={22}
        marginBottom={2}
      >
        Ils nous soutiennent
      </Typography>
      {/* Composant ImageSwiper pour afficher les images des partenaires */}
      <ImageSwiper listImage={listImage} />
    </Box>
  );
};
