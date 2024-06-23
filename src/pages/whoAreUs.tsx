import { Divider } from "@mui/material";
import { WhoAreFooter } from "components/freedComponent/whoAre/whoAreFooter";
import { WhoAreHeader } from "components/freedComponent/whoAre/whoAreHeader";
import { WhoAreMiddle } from "components/freedComponent/whoAre/whoAreMiddle";
import { WhoHeaderContact } from "components/freedComponent/whoAre/whoHeaderContact";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel WhoAreUs
export const WhoAreUs: FC = () => {
  return (
    <Layout>
      <WhoAreHeader />
      <WhoAreMiddle />
      <Divider sx={{ margin: 5 }} />
      <WhoAreFooter />
      <Divider sx={{ margin: 5 }} />
      <WhoHeaderContact />
    </Layout>
  );
};
