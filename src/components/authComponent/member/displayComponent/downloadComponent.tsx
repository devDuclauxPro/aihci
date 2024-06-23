import { Accordion, Container, Typography } from "@mui/material";
import { Layout } from "layout/layout";
import { FC } from "react";
import { DownloadTable } from "../tableComponent/downloadTable";

export const DownloadComponent: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginY: 3, minHeight: "70vh" }}>
        <Typography marginTop={12} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Voir les documents téléchargeables
        </Typography>
        {["Procuration", "Fiche de note", "Listes des postes", "Programme de gardes en pharmacie CHU Treichville"].map(
          (list, id) => (
            <Accordion key={id} sx={{ marginBottom: 1 }}>
              <DownloadTable list={{ list, id }} />
            </Accordion>
          )
        )}
      </Container>
    </Layout>
  );
};
