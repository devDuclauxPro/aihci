import { Box } from "@mui/material";
import { AppAppBar } from "components/freedComponent/appBar/appAppBar";
import { FC } from "react";

// Composant Header qui inclut la barre d'application
export const Header: FC = () => {
  return (
    <Box>
      <AppAppBar />
    </Box>
  );
};
