import { Divider } from "@mui/material";
import { QuiHeaderContact } from "components/quiSomme/quiHeaderContact";
import { QuiSommesFooter } from "components/quiSomme/quiSommesFooter";
import { QuiSommesHeader } from "components/quiSomme/quiSommesHeader";
import { QuiSommesMiddle } from "components/quiSomme/quiSommesMiddle";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel QuiSommesNous
export const QuiSommesNous: FC = () => {
  return (
    <Layout>
      <QuiSommesHeader />
      <QuiSommesMiddle />
      <Divider sx={{ margin: 5 }} />
      <QuiSommesFooter />
      <Divider sx={{ margin: 5 }} />
      <QuiHeaderContact />
    </Layout>
  );
};
