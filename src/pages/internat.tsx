import { InternatMiddle } from "components/freedComponent/internat/internatMiddle";
import { GenericHeader } from "components/generic/genericHeader";
import linternat from "images/linternat.png";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel Internat
export const Internat: FC = () => {
  return (
    <Layout>
      <GenericHeader>
        <img width="100%" style={{ objectFit: "cover" }} src={linternat} alt="internat" />
      </GenericHeader>
      <InternatMiddle />
    </Layout>
  );
};
