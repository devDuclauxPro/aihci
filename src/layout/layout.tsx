import { Box } from "@mui/material";

import { FC, ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

// Composant Layout qui encapsule la structure globale de la page
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
