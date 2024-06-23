import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

type TlistArticleSubmittedChild = {
  list: {
    list: string;
    id: number;
  };
};

export const ArticleSubmittedChildTable: FC<TlistArticleSubmittedChild> = ({ list }) => {
  return (
    <>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`ancien-bureau-${list.id + 1}`}
        id={`ancien-bureau-${list.id + 1}`}
        sx={{ bgcolor: "#9db69d", fontWeight: 600, color: "white" }}
      >
        {list.list}
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
    </>
  );
};
