import { Container } from "@mui/material";
import { Layout } from "layout/layout";
import { FC } from "react";
import { ConcernWriteForm } from "../formComponent/concernWriteForm";
import { ConcernTable } from "../tableComponent/concernTable";

export const ConcernComponent: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <ConcernWriteForm />
        <ConcernTable />
      </Container>
    </Layout>
  );
};
