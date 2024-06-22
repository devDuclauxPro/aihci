import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

export const TableComposantMembre: FC = () => {
  return (
    <Box gap={2} display="flex" alignItems="center">
      <Typography variant="body2" component="p">
        Titre du document à télécharger
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
