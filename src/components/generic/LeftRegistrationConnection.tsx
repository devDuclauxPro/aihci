import { Box, Grid } from "@mui/material";
import { zoomInOutGenericOne } from "animations/animation";
import { LeftContent } from "components/generic/leftContent";
import { FC } from "react";
import { BtnGeneric } from "./btnGeneric";

export const LeftRegistrationConnection: FC = () => {
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
          <BtnGeneric btnText="Se connecter" btnLink="/se-connecter" btnZooInOutCard={zoomInOutGenericOne} />
        </Box>
      </Box>
    </Grid>
  );
};
