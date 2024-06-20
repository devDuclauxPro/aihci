import { Divider } from "@mui/material";
import { QuiHeaderContact } from "components/freedComponent/quiSomme/quiHeaderContact";
import { QuiSommesFooter } from "components/freedComponent/quiSomme/quiSommesFooter";
import { QuiSommesHeader } from "components/freedComponent/quiSomme/quiSommesHeader";
import { QuiSommesMiddle } from "components/freedComponent/quiSomme/quiSommesMiddle";
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
