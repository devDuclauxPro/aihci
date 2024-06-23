import { Container, Divider } from "@mui/material";
import { Layout } from "layout/layout";
import { FC } from "react";
import { RegisterTrainingForm } from "../formComponent/registerTrainingForm";
import { RegisterTrainingTable } from "../formComponent/registerTrainingTable";

export const RegisterTrainingComponent: FC = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ minHeight: "80vh", marginTop: 10 }}>
        <RegisterTrainingForm />
        <Divider />
        <RegisterTrainingTable />
      </Container>
    </Layout>
  );
};
