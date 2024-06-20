import { ArticleHeader } from "components/freedComponent/article/articleHeader";
import { GenericHeaderAihci } from "components/generic/genericHeaderAihci";
import { Layout } from "layout/layout";
import { FC } from "react";

export const Article: FC = () => {
  return (
    <Layout>
      <GenericHeaderAihci />
      <ArticleHeader />
    </Layout>
  );
};
