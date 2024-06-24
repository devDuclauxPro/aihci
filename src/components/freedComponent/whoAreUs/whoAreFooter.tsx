import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

/**
 * Composant QuiSommesFooter représente la section des anciens Bureaux Exécutifs.
 * Il affiche une liste d'accordéons pour chaque bureau exécutif avec un lien de téléchargement.
 */
export const WhoAreFooter: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginY: 3 }}>
      <Typography variant="h3" component="h1" color="#ff6900" textAlign="center">
        Anciens Bureaux Exécutifs
      </Typography>
      {[1, 2, 3, 4, 5].map((list, id) => (
        <Accordion key={id} sx={{ marginBottom: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`ancien-bureau-${id + 1}`}
            id={`ancien-bureau-${id + 1}`}
            sx={{ bgcolor: "#9db69d", fontWeight: 600, color: "white" }}
          >
            Bureau 2022-2023
          </AccordionSummary>
          <AccordionDetails>
            <Link to="https://aihci-client.vercel.app/contact" target="_blank" rel="noopener noreferrer">
              Téléchargement du fichier
            </Link>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
