import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { SmalRigthFollowing } from "./smalRigthFollowing";

// Composant SmallRigth qui affiche la section de suivi social
export const SmallRigth: FC = () => {
  return (
    <Box flexGrow={1}>
      <Box padding={2} bgcolor="#ffebd9" sx={{ display: "flex" }}>
        {/* Composant SmalRigthFollowing pour afficher les icônes de suivi */}
        <SmalRigthFollowing />
        <Typography variant="body1" color="#ff6900" fontWeight={500} textTransform="uppercase">
          SUIVEZ-NOUS POUR NE RIEN LOUPER
        </Typography>
      </Box>
    </Box>
  );
};
