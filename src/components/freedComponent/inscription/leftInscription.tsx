import { Box, Grid, Typography } from "@mui/material";
import { zoomInOutLeft } from "animations/animation";
import { ButtonGeneric } from "components/generic/buttonGeneric";
import { FC } from "react";

export const LeftInscription: FC = () => {
  return (
    <Grid item xs={12} md={6} marginTop={15}>
      <Box padding={1} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1" textAlign="center" marginBottom={3}>
          Pour accéder à toutes les offres, merci de te connecter à ton compte ! 🙂
        </Typography>
        <Typography variant="body1" textAlign="center" marginBottom={3}>
          Si tu es adhérent et que tu te connectes pour la première fois, tu as dû recevoir un mail permettant de
          valider ton compte.
        </Typography>
        <Typography variant="body1" textAlign="center" marginBottom={3}>
          Si tu es adhérent mais que tu n’as pas reçu de mail de validation de compte, merci de nous contacter !
        </Typography>
        <Typography variant="body1" textAlign="center" marginBottom={3}>
          Si tu es un adhérent, rendez-vous ici ⏬
        </Typography>
        <Box marginTop={3}>
          <ButtonGeneric buttonText="Se connecter" link="/se-connecter" zooInOutCard={zoomInOutLeft} />
        </Box>
      </Box>
    </Grid>
  );
};
