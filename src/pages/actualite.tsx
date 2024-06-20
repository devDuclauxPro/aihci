import { ActusMiddle } from "components/freedComponent/actus/actusMiddle";
import { GenericHeader } from "components/generic/genericHeader";
import actualites from "images/actualites.png";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel Actualite
export const Actualite: FC = () => {
  return (
    <Layout>
      <GenericHeader>
        <img width="100%" style={{ objectFit: "cover" }} src={actualites} alt="notre-reseau" />
      </GenericHeader>
      <ActusMiddle />
    </Layout>
  );
};
