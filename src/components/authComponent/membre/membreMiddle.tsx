import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
import { MembreCardDocument } from "./membreCardDocument";
import { MembreCardEspaceProfil } from "./membreCardEspaceProfil";
import { MembreCardFormTheo } from "./membreCardFormTheo";
import { MembreCardProbleme } from "./membreCardProbleme";
import { MembreCardProcuration } from "./membreCardProcuration";
import { MembreCardSoumission } from "./membreCardSoumission";
import { MembreCardVoirInfo } from "./membreCardVoirInfo";

export const MembreMiddle: FC = () => {
  return (
    <Box bgcolor="#f2f2f6">
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          {/* Colonne de gauche  */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <MembreCardProcuration
                  link="/espace-membre/telecharher-les-procurations"
                  buttonText="Les procurations"
                  description="Tu souhaites te faire représenter par un autre interne ? Clique ici pour télécharger une procuration !"
                />
              </Grid>
              <Grid item>
                <MembreCardDocument
                  link="/espace-membre/telecharger-les-autres-documents"
                  buttonText="Les autres documents"
                />
              </Grid>
              <Grid item>
                <MembreCardFormTheo
                  link="/espace-membre/inscription-formation"
                  buttonText="S'inscrire à une formation"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              {/* Section Filières de l'internat */}
              <Grid item xs={12}>
                <MembreCardProbleme
                  link="/espace-membre/soumettre-une-preocupation"
                  buttonText="Je soumets mes préoccupations au BEN"
                  description="Le BEN analysera vos préoccupations et vous répondra dans un délai de 48 heures"
                />
              </Grid>
              <Grid item xs={12}>
                <MembreCardSoumission
                  link="/espace-membre/soumettre-mon-article"
                  buttonText="Je soumets mon article pour les Journées scientifiques"
                  description="La commission scientifique analysera vos articles et resumés et vous répondra dans un délai de 72 heures"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MembreCardVoirInfo
              link="/espace-membre/mes-soumission"
              buttonText="Je consulte mes informations soumises"
            />
          </Grid>
          <Grid item xs={12}>
            <MembreCardEspaceProfil link="/espace-membre/mes-information" buttonText="Je consulte mon profil" />
          </Grid>
          <Grid item xs={12}>
            <MembreCardEspaceProfil link="/espace-membre/admin" buttonText="Espace administrateur" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
