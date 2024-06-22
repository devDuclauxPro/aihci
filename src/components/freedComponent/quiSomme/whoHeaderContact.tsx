import { Box, Typography } from "@mui/material";
import { WhoGenericTitle } from "components/generic/whoGenericTitle";
import { FC } from "react";
import { Link } from "react-router-dom";

/**
 * Composant QuiHeaderContact représente l'en-tête de la section Contact.
 * Il affiche un titre générique "Contact" et un paragraphe avec un lien mailto pour contacter l'AIHCI.
 */
export const WhoHeaderContact: FC = () => {
  return (
    <Box marginBottom={3} gap={3} display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <WhoGenericTitle title="Contact" />
      <Typography variant="subtitle2" component="p" fontSize={22} fontWeight={300}>
        Merci de nous contacter via l'adresse suivante :
        <Link to="mailto:aihci50@gmail.com" target="_blank">
          aihci50@gmail.com
        </Link>
      </Typography>
    </Box>
  );
};
