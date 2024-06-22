import { Box, Typography } from "@mui/material";
import { FC } from "react";

const stats = [
  { number: 40, description: "Ans d'existence" },
  { number: 40, description: "Internes en pharmacie inscrits" },
  { number: 40, description: "Internes en médecine inscrits" },
  { number: 40, description: "Internes en odonto inscrits" },
];

/**
 * Composant QuiHeaderNombre affiche trois blocs de statistiques avec des chiffres et des descriptions.
 */
export const WhoHeaderNomber: FC = () => {
  return (
    <Box
      gap={2}
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      sx={{
        justifyContent: { xs: "center", md: "space-between" },
        color: "#ff6900",
        "& > div": { textAlign: "center" },
      }}
    >
      {stats.map((stat, index) => (
        <Box key={index}>
          <Typography variant="h1" component="div" fontWeight={700} color="#ff6900" fontSize={80}>
            {stat.number}
          </Typography>
          <Typography variant="body1" component="div" fontWeight={700} color="#000">
            {stat.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
