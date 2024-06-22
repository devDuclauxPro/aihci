import { Box, Container, Grid } from "@mui/material";
import { CardGenericComponent } from "components/generic/cardGenericComponent";
import { FC } from "react";

export const MembreMiddle: FC = () => {
  return (
    <Box bgcolor="#f2f2f6">
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          {/* Colonne de gauche  */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <CardGenericComponent
                  btnLink="/espace-membre/telecharger-les-documents"
                  btnText="Les documents téléchargeables"
                  cardDescription="Vous souhaitez télécharger des documents ? Veuillez cliquer ici pour les télécharger !"
                />
              </Grid>
              <Grid item>
                <CardGenericComponent
                  btnLink="/espace-membre/inscription-formation"
                  btnText="S'inscrire à une formation"
                  cardDescription="Vous souhaitez participer à une formation ? Veuillez cliquer ici pour les inscriptions !"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Section Filières de l'internat */}
              <Grid item xs={12}>
                <CardGenericComponent
                  btnLink="/espace-membre/soumettre-une-preocupation"
                  btnText="Je soumets mes préoccupations au BEN"
                  cardDescription="Le BEN analysera vos préoccupations et vous répondra dans un délai de 48 heures"
                  btnColor="primary"
                />
              </Grid>
              <Grid item xs={12}>
                <CardGenericComponent
                  btnLink="/espace-membre/soumettre-mon-resume"
                  btnText="Je soumets mon article / résumé pour les Journées scientifiques"
                  cardDescription="La commission scientifique analysera vos articles et résumés et vous répondra dans un délai de 72 heures"
                  btnColor="primary"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CardGenericComponent
              btnLink="/espace-membre/mes-information"
              btnText="Je consulte mon profil"
              btnColor="secondary"
            />
          </Grid>
          <Grid item xs={12}>
            <CardGenericComponent btnLink="/espace-membre/admin" btnText="Espace administrateur" btnColor="secondary" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
