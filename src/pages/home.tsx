import { HomeFooter } from "components/freedComponent/home/homeFooter";
import { HomeHeader } from "components/freedComponent/home/homeHeader";
import { HomeMiddle } from "components/freedComponent/home/homeMiddle";
import { Layout } from "layout/layout";
import { FC } from "react";

// Composant Home qui assemble les sections de la page d'accueil
export const Home: FC = () => {
  return (
    <Layout>
      <HomeHeader />
      <HomeMiddle />
      <HomeFooter />
    </Layout>
  );
};
