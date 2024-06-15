import { Box } from "@mui/material";
import { FC } from "react";

// Composant HomeLeft qui crée un espace à gauche sur la page d'accueil
export const HomeLeft: FC = () => {
  return (
    <Box flexGrow={1} sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "#ff6900", minWidth: "50vw" }}>
      {/* Ce composant est invisible sur les écrans extra petits (xs) et visible en mode flex sur les écrans moyens (md) */}
    </Box>
  );
};
