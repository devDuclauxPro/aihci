import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { FC } from "react";
import { TableComposantSoumisEnfant } from "./tableComposantSoumisEnfant";

export const TableArticleSoumis: FC = () => {
  return (
    <>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Voir mes articles soumis
      </Typography>
      {["Journées scientifiques J16", "Journées scientifiques J15", "Journées scientifiques J14"].map((list, id) => (
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
            <TableComposantSoumisEnfant />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
