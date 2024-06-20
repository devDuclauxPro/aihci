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
                  link="/telecharher-les-procuratios"
                  buttonText="Les procurations"
                  description="Tu souhaites te faire représenter par un autre interne ? Clique ici pour télécharger une procuration !"
                />
              </Grid>
              <Grid item>
                <MembreCardDocument link="/telecharger-les-autres-documents" buttonText="Les autres documents" />
              </Grid>
              <Grid item>
                <MembreCardFormTheo link="/inscription-formation" buttonText="S'inscrire à une formation" />
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              {/* Section Filières de l'internat */}
              <Grid item xs={12}>
                <MembreCardProbleme
                  link="/soumettre-une-preocupation"
                  buttonText="Je soumets mes préoccupations au BEN"
                  description="Le BEN analysera vos préoccupations et vous répondra dans un délai de 48 heures"
                />
              </Grid>
              <Grid item xs={12}>
                <MembreCardSoumission
                  link="/soumettre-mon-article"
                  buttonText="Je soumets mon article pour les Journées scientifiques"
                  description="Le BEN analysera vos articles et resumés et vous répondra dans un délai de 72 heures"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MembreCardVoirInfo link="/mes-soumission" buttonText="Je consulte mes informations soumises" />
          </Grid>
          <Grid item xs={12}>
            <MembreCardEspaceProfil link="/mes-information" buttonText="Je consulte mon profil" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
