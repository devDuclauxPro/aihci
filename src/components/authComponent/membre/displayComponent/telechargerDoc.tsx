import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import { Layout } from "layout/layout";
import { FC } from "react";
import { TableComposantMembre } from "./tableComposantMembre";

export const TelechargerDoc: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginY: 3, minHeight: "70vh" }}>
        <Typography marginTop={12} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Voir les documents téléchargeables
        </Typography>
        {["Procuration", "Fiche de note", "Listes des postes", "Programme de gardes en pharmacie CHU Treichville"].map(
          (list, id) => (
            <Accordion key={id} sx={{ marginBottom: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`ancien-bureau-${id + 1}`}
                id={`ancien-bureau-${id + 1}`}
                sx={{ bgcolor: "#9db69d", fontWeight: 600, color: "white" }}
              >
                {list}
              </AccordionSummary>
              <AccordionDetails>
                <TableComposantMembre />
              </AccordionDetails>
            </Accordion>
          )
        )}
      </Container>
    </Layout>
  );
};
