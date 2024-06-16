import { Box } from "@mui/material";
import linternat from "images/linternat.png";
import { FC } from "react";

// Composant d'en-tête pour l'internat
export const InternatHeader: FC = () => {
  return (
    <Box paddingBottom={5} paddingTop={12} bgcolor="#bcbcbc" display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ width: { xs: 300, sm: 400, md: 500 } }} paddingX={5}>
        <img width="100%" style={{ objectFit: "cover" }} src={linternat} alt="Internat" />
      </Box>
    </Box>
  );
};
