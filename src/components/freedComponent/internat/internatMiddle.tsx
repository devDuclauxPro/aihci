import { Box, Container, Grid, Typography } from "@mui/material";
import { CardGenericComponent } from "components/generic/cardGenericComponent";
import { SectionBoxPratique } from "components/generic/sectionBoxPratique";
import { FC } from "react";

export const InternatMiddle: FC = () => {
  return (
    <Box bgcolor="#f2f2f6">
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          {/* Colonne de gauche  */}
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <CardGenericComponent
                  btnLink="/le-concours-de-linternat"
                  btnText="Le concours de l'internat"
                  cardDescription="Tu souhaites t'inscrire au concours de l'internat ? Voici toutes les infos que tu dois connaitre !"
                />
              </Grid>
              <Grid item>
                <CardGenericComponent btnLink="/la-formation-theorique" btnText="La formation théorique" />
              </Grid>
              <Grid item>
                <CardGenericComponent btnLink="/la-profil-de-carriere" btnText="Le profil de carrière de l'interne" />
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {/* Section Filières de l'internat */}
              <Grid item xs={12} lg={6}>
                <CardGenericComponent
                  btnLink="/le-guide-de-linternat"
                  btnText="Le Guide de l’Interne"
                  cardDescription="Toutes les infos pour comprendre l’internat et prendre ses nouvelles fonctions de façon sereine !"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box bgcolor="#9db69d" padding={1} borderRadius={1}>
                  <Typography variant="h6" component="div" color="white" paddingX={1} paddingY={0.8} textAlign="center">
                    Les choix à l’internat
                  </Typography>
                  <Grid item marginBottom={1}>
                    <CardGenericComponent btnLink="/choix-des-chambres" btnText="Choix des chambres" />
                  </Grid>
                  <Grid item marginBottom={1}>
                    <CardGenericComponent btnLink="/choix-des-postes" btnText="Choix des postes" />
                  </Grid>
                  <Grid item marginBottom={1}>
                    <CardGenericComponent
                      btnLink="/les-specialites"
                      btnText="Spécialités pendant le choix des postes"
                    />
                  </Grid>
                </Box>
              </Grid>
              {/* Section Formation pratique durant l’internat */}
              <Grid item xs={12} sx={{ display: { xs: "none", lg: "block" } }}>
                <SectionBoxPratique title="La formation pratique durant l’internat">
                  <Grid item marginBottom={1}>
                    <CardGenericComponent btnLink="/le-samedi-de-linterne" btnText="Samedi de l'interne" />
                  </Grid>
                  <Grid item marginBottom={1}>
                    <CardGenericComponent btnLink="/la-formation-continue" btnText="Formation continue" />
                  </Grid>
                  <Grid item marginBottom={1}>
                    <CardGenericComponent btnLink="/les-journees-scientifiques" btnText="Les journées scientifiques" />
                  </Grid>
                </SectionBoxPratique>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: { lg: "none" } }}>
            <SectionBoxPratique title="La formation pratique durant l’internat">
              <Grid item marginBottom={1}>
                <CardGenericComponent btnLink="/le-samedi-de-linterne" btnText="Samedi de l'interne" />
              </Grid>
              <Grid item marginBottom={1}>
                <CardGenericComponent btnLink="/la-formation-continue" btnText="Formation continue" />
              </Grid>
              <Grid item marginBottom={1}>
                <CardGenericComponent btnLink="/les-journees-scientifiques" btnText="Les journées scientifiques" />
              </Grid>
            </SectionBoxPratique>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
