import { Box, Typography } from "@mui/material";
import { zoomInOutGenericOne, zoomInOutGenericTwo } from "animations/animation";
import { BtnGeneric } from "components/generic/btnGeneric";
import { FC } from "react";

// Composant HomeRight qui affiche le contenu principal à droite sur la page d'accueil
export const HeaderRight: FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h5"
        component="h1"
        color="#275427"
        textAlign="center"
        fontWeight={500}
        fontSize={30}
        marginBottom={6}
      >
        Bienvenue sur le site de l'AIHCI
      </Typography>
      <Typography variant="body1" textAlign="justify" fontWeight={300} fontSize={20} marginBottom={5}>
        L'Association des Internes des Hôpitaux de Côte d'Ivoire en Médecine et en Pharmacie.
      </Typography>
      <Typography variant="body1" textAlign="justify" fontWeight={300} fontSize={18} marginBottom={6}>
        Notre mission est de défendre les droits des internes de Côte d'Ivoire et de garantir l'avenir de nos
        professions.
      </Typography>
      <Box gap={2} sx={{ display: "flex", marginBottom: 3, flexDirection: { xs: "column", sm: "row" } }}>
        <BtnGeneric
          btnText="En savoir plus"
          btnLink="/qui-sommes-nous"
          btnSize="large"
          btnVariant="contained"
          btnZooInOutCard={zoomInOutGenericOne}
        />
        <BtnGeneric
          btnText="Comprendre l'internat"
          btnLink="/linternat"
          btnSize="large"
          btnVariant="outlined"
          btnZooInOutCard={zoomInOutGenericTwo}
        />
      </Box>
    </Box>
  );
};
