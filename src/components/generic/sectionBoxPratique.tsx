import { Box, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

// Composant pour les sections réutilisables
export const SectionBoxPratique: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <Box bgcolor="#9db69d" padding={1} borderRadius={1}>
    <Typography variant="h6" component="div" color="white" paddingX={1} paddingY={0.8} textAlign="center">
      {title}
    </Typography>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{ display: { sx: "block", sm: "flex" } }}
    >
      {children}
    </Box>
  </Box>
);
