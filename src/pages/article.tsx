import { ArticleHeader } from "components/freedComponent/article/articleHeader";
import { GenericHeader } from "components/generic/genericHeader";
import aihci from "images/aihci.png";
import { Layout } from "layout/layout";
import { FC } from "react";

export const Article: FC = () => {
  return (
    <Layout>
      <GenericHeader imageHeader={aihci} />
      <ArticleHeader />
    </Layout>
  );
};
