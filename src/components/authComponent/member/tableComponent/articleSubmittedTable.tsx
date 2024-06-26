import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

export const ArticleSubmittedTable: FC = () => {
  return (
    <>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Voir mes articles soumis
      </Typography>
      {["Journées scientifiques J16", "Journées scientifiques J15", "Journées scientifiques J14"].map((list, id) => (
        <Accordion key={id} sx={{ marginBottom: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`ancien-bureau-${list + 1}`}
            id={`ancien-bureau-${list + 1}`}
            sx={{ bgcolor: "#9db69d", fontWeight: 600, color: "white" }}
          >
            {list}
          </AccordionSummary>
          <AccordionDetails>
            <Box gap={2} display="flex" alignItems="center">
              <Typography variant="body2" component="p">
                Document soumis
              </Typography>
              <Typography variant="body2" component="p" color="#ff6900">
                En attente de validation
              </Typography>
              <Link to="/" target="_blank" rel="noopener noreferrer">
                Télécharger le document
              </Link>
              <Button variant="contained" color="error" size="small">
                Supprimer
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
