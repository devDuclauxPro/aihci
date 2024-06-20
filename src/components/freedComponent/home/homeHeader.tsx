import { Box } from "@mui/material";
import { FC } from "react";
import { HomeLeft } from "./headerLeft";
import { HomeRight } from "./headerRight";
import { SmalLeft } from "./headerSmalLeft";
import { SmallRigth } from "./headerSmalRigth";

// Composant HomeHeader qui affiche les sections de l'en-tête de la page d'accueil
export const HomeHeader: FC = () => {
  return (
    <Box>
      {/* Section principale de l'en-tête avec HomeLeft et HomeRight */}
      <Box sx={{ display: "flex", paddingTop: 8 }}>
        <HomeLeft />
        <HomeRight />
      </Box>
      {/* Section secondaire de l'en-tête, visible seulement sur les écrans moyens et plus grands */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <SmalLeft />
        <SmallRigth />
      </Box>
    </Box>
  );
};
