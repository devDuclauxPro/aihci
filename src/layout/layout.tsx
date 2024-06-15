import { Box } from "@mui/material";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { FC, ReactNode } from "react";

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
