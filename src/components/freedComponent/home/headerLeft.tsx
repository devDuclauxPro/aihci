import { Box } from "@mui/material";
import interneImage from "images/interneImage.jpg";
import { FC } from "react";

// Composant HomeLeft qui crée un espace à gauche sur la page d'accueil
export const HeaderLeft: FC = () => {
  return (
    <Box flexGrow={1} sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "#ff6900", minWidth: "50vw" }}>
      <img width="100%" src={interneImage} alt="internes des hopitaux" style={{ objectFit: "cover" }} />
    </Box>
  );
};
