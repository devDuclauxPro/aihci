import { PartnerMiddle } from "components/freedComponent/partner/partnerMiddle";
import { GenericHeader } from "components/generic/genericHeader";
import nospartenaires from "images/nos-partenaires.png";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel Partenaire
export const Partner: FC = () => {
  return (
    <Layout>
      <GenericHeader>
        <img width="100%" style={{ objectFit: "cover" }} src={nospartenaires} alt="nos-partenaires" />
      </GenericHeader>
      <PartnerMiddle />
    </Layout>
  );
};
