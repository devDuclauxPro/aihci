import { Box, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { InternatCardConcours } from "./internatCardConcours";
import { InternatCardFiliere } from "./internatCardFiliere";
import { InternatCardFormPratique } from "./internatCardFormPratique";
import { InternatCardFormTheo } from "./internatCardFormTheo";
import { InternatCardGuide } from "./internatCardGuide";
import { InternatCardRecherche } from "./internatCardRecherche";
import { SectionBoxPratique } from "./sectionBoxPratique";

export const InternatMiddle: FC = () => {
  return (
    <Box bgcolor="#f2f2f6">
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          {/* Colonne de gauche  */}
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <InternatCardConcours
                  link="/le-concours-de-linternat"
                  buttonText="Le concours de l'internat"
                  description="Tu souhaites t'inscrire au concours de l'internat ? Voici toutes les infos que tu dois connaitre !"
                />
              </Grid>
              <Grid item>
                <InternatCardFormTheo link="/la-formation-theorique" buttonText="La formation théorique" />
              </Grid>
              <Grid item>
                <InternatCardRecherche
                  link="/la-recherche-durant-linternat"
                  buttonText="La recherche durant l'internat"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={1}>
              {/* Section Filières de l'internat */}
              <Grid item xs={12} lg={6}>
                <InternatCardGuide
                  link="/le-guide-de-linternat"
                  buttonText="Le Guide de l’Interne"
                  description="Toutes les infos pour comprendre l’internat et prendre ses nouvelles fonctions de façon sereine !"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box bgcolor="#9db69d" padding={1} borderRadius={1}>
                  <Typography variant="h6" component="div" color="white" paddingX={1} paddingY={0.8} textAlign="center">
                    Les 3 filières de l’internat
                  </Typography>
                  <Grid item marginBottom={1}>
                    <InternatCardFiliere link="/des-biologie-medicale" buttonText="DES de Biologie Médicale" />
                  </Grid>
                  <Grid item marginBottom={1}>
                    <InternatCardFiliere
                      link="/des-pharmacie-hospitaliere"
                      buttonText="DES de Pharmacie Hospitalière"
                    />
                  </Grid>
                  <Grid item marginBottom={1}>
                    <InternatCardFiliere
                      link="/des-inovation-pharmaceutique-recherche"
                      buttonText="DES Innovation Pharmaceutique et Recherche"
                    />
                  </Grid>
                </Box>
              </Grid>
              {/* Section Formation pratique durant l’internat */}
              <Grid item xs={12} sx={{ display: { xs: "none", lg: "block" } }}>
                <SectionBoxPratique title="La formation pratique durant l’internat">
                  <Grid item marginBottom={1}>
                    <InternatCardFormPratique link="/choisir-son-stage" buttonText="Choisir son stage" />
                  </Grid>
                  <Grid item marginBottom={1}>
                    <InternatCardFormPratique
                      link="/stages-extra-hospitaliers"
                      buttonText="Stages extra-hospitaliers"
                    />
                  </Grid>
                  <Grid item marginBottom={1}>
                    <InternatCardFormPratique
                      link="/la-mobilite-durant-linternat"
                      buttonText="La mobilité durant l'internat"
                    />
                  </Grid>
                </SectionBoxPratique>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ display: { lg: "none" } }}>
            <SectionBoxPratique title="La formation pratique durant l’internat">
              <Grid item marginBottom={1}>
                <InternatCardFormPratique link="/choisir-son-stage" buttonText="Choisir son stage" />
              </Grid>
              <Grid item marginBottom={1}>
                <InternatCardFormPratique link="/stages-extra-hospitaliers" buttonText="Stages extra-hospitaliers" />
              </Grid>
              <Grid item marginBottom={1}>
                <InternatCardFormPratique
                  link="/la-mobilite-durant-linternat"
                  buttonText="La mobilité durant l'internat"
                />
              </Grid>
            </SectionBoxPratique>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
