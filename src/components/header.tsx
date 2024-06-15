import { Box } from "@mui/material";
import { FC } from "react";
import { AppAppBar } from "./appBar/appAppBar";

// Composant Header qui inclut la barre d'application
export const Header: FC = () => {
  return (
    <Box>
      <AppAppBar />
    </Box>
  );
};
