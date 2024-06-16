import { Box, Button, Typography } from "@mui/material";
import { zoomInOutLeft, zoomInOutRight } from "animations/animation";
import { FC } from "react";

// Composant HomeRight qui affiche le contenu principal à droite sur la page d'accueil
export const HomeRight: FC = () => {
  return (
    <Box>
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
          L'association des internes des hôpitaux de Côte d'Ivoire en médecine et en pharmacie.
        </Typography>
        <Typography variant="body1" textAlign="justify" fontWeight={300} fontSize={18} marginBottom={6}>
          Notre mission est de défendre les droits des internes de Côte d'Ivoire et d’assurer l’avenir de nos métiers.
        </Typography>
        <Box gap={2} sx={{ display: "flex", marginBottom: 3, flexDirection: { xs: "column", sm: "row" } }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              textTransform: "inherit",
              fontWeight: 600,
              "&:hover": {
                animation: `${zoomInOutLeft} 1s infinite`,
              },
            }}
          >
            En savoir plus
          </Button>
          <Button
            variant="outlined"
            color="success"
            size="large"
            sx={{
              textTransform: "inherit",
              fontWeight: 600,
              "&:hover": { animation: `${zoomInOutRight} 1s infinite` },
            }}
          >
            Comprendre l'internat
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
