import { Container, Divider } from "@mui/material";
import { Layout } from "layout/layout";
import { FC } from "react";
import { ArticleSubmittedForm } from "../formComponent/articleSubmittedForm";
import { ArticleSubmittedTable } from "../tableComponent/articleSubmittedTable";

export const ArticleSubmittedComponent: FC = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ minHeight: "80vh", marginTop: 10 }}>
        <ArticleSubmittedForm />
        <Divider />
        <ArticleSubmittedTable />
      </Container>
    </Layout>
  );
};
