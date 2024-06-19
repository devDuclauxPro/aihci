import { GenericHeader } from "components/generic/genericHeader";
import { PartenaireMiddle } from "components/partenaire/partenaireMiddle";
import nospartenaires from "images/nos-partenaires.png";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel Partenaire
export const Partenaire: FC = () => {
  return (
    <Layout>
      <GenericHeader>
        <img width="100%" style={{ objectFit: "cover" }} src={nospartenaires} alt="nos-partenaires" />
      </GenericHeader>
      <PartenaireMiddle />
    </Layout>
  );
};
