import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

export const TableComposantSoumisEnfant: FC = () => {
  return (
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
  );
};
