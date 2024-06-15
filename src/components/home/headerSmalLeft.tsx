import { Box, Typography } from "@mui/material";
import { FC } from "react";

// Composant SmallLeft qui affiche les dernières actualités
export const SmalLeft: FC = () => {
  return (
    <Box sx={{ bgcolor: "#ff6900", minWidth: "50vw" }}>
      {/* Titre des dernières actualités avec style spécifique */}
      <Typography variant="h6" component="p" color="white" textTransform="uppercase" textAlign="center" fontSize={18}>
        NOS DERNIÈRES ACTUALITÉS EN UN COUP D’ŒIL
      </Typography>
    </Box>
  );
};
