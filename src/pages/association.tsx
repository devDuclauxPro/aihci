import { AssociationMiddle } from "components/freedComponent/association/associationMiddle";
import { GenericHeader } from "components/generic/genericHeader";
import notrereseau from "images/notre-reseau-associatif.png";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel Association
export const Association: FC = () => {
  return (
    <Layout>
      <GenericHeader>
        <img width="100%" style={{ objectFit: "cover" }} src={notrereseau} alt="notre association" />
      </GenericHeader>
      <AssociationMiddle />
    </Layout>
  );
};
