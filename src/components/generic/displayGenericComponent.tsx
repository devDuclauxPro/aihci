import { GenericHeader } from "components/generic/genericHeader";
import aihci from "images/aihci.png";
import { Layout } from "layout/layout";
import { FC, ReactNode } from "react";

export const DisplayGenericComponent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <GenericHeader imageHeader={aihci} />
      {children}
    </Layout>
  );
};
