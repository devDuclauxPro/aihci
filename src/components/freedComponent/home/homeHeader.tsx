import { Box } from "@mui/material";
import { FC } from "react";
import { HeaderLeft } from "./headerLeft";
import { HeaderRight } from "./headerRight";
import { HeaderSmalLeft } from "./headerSmalLeft";
import { HeaderSmalRigth } from "./headerSmalRigth";

// Composant HomeHeader qui affiche les sections de l'en-tête de la page d'accueil
export const HomeHeader: FC = () => {
  return (
    <>
      {/* Section principale de l'en-tête avec HomeLeft et HomeRight */}
      <Box sx={{ display: "flex", paddingTop: 8 }}>
        <HeaderLeft />
        <HeaderRight />
      </Box>
      {/* Section secondaire de l'en-tête, visible seulement sur les écrans moyens et plus grands */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <HeaderSmalLeft />
        <HeaderSmalRigth />
      </Box>
    </>
  );
};
