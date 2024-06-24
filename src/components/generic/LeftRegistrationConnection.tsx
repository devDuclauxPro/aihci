import { Box, Grid, Typography } from "@mui/material";
import { zoomInOutGenericOne } from "animations/animation";
import { FC } from "react";
import { BtnGeneric } from "./btnGeneric";

export const LeftRegistrationConnection: FC<{ btnLink: string; btnText: string }> = ({ btnLink, btnText }) => {
  return (
    <Grid item xs={12} md={6} marginTop={15}>
      <Box padding={1} display="flex" flexDirection="column" alignItems="center">
        <LeftContent content="Pour accéder à toutes les offres, merci de te connecter à ton compte ! 🙂" />
        <LeftContent
          content="Si tu es adhérent et que tu te connectes pour la première fois, tu as dû recevoir un mail permettant de
          valider ton compte."
        />
        <LeftContent content="Si tu es adhérent mais que tu n’as pas reçu de mail de validation de compte, merci de nous contacter !" />
        <LeftContent content="Si tu es un adhérent, rendez-vous ici ⏬" />
        <Box marginTop={3}>
          <BtnGeneric btnText={btnText} btnLink={btnLink} btnZooInOutCard={zoomInOutGenericOne} />
        </Box>
      </Box>
    </Grid>
  );
};

const LeftContent = ({ content }: { content: string }) => {
  return (
    <Typography variant="body1" textAlign="center" marginBottom={3}>
      {content}
    </Typography>
  );
};
