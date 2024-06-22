import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import { Layout } from "layout/layout";
import { FC } from "react";
import { TableComposantFormation } from "./tableComposantFormation";

export const InscritFormation: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginY: 3, minHeight: "70vh" }}>
        <Typography marginTop={12} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Voir la liste des inscrits des formations
        </Typography>
        {["Formation AUF", "Formation Excel", "Formation PACCI"].map((list, id) => (
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
              <TableComposantFormation />
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Layout>
  );
};
