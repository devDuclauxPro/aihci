import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
import { MembreCardDocument } from "./cardComponent/membreCardDocument";
import { MembreCardEspaceProfil } from "./cardComponent/membreCardEspaceProfil";
import { MembreCardFormTheo } from "./cardComponent/membreCardFormTheo";
import { MembreCardProbleme } from "./cardComponent/membreCardProbleme";
import { MembreCardSoumission } from "./cardComponent/membreCardSoumission";

export const MembreMiddle: FC = () => {
  return (
    <Box bgcolor="#f2f2f6">
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          {/* Colonne de gauche  */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <MembreCardDocument
                  link="/espace-membre/telecharger-les-documents"
                  buttonText="Les documents téléchargeables"
                  description="Vous souhaitez télécharger des documents ? Veuillez cliquer ici pour les télécharger !"
                />
              </Grid>
              <Grid item>
                <MembreCardFormTheo
                  link="/espace-membre/inscription-formation"
                  buttonText="S'inscrire à une formation"
                  description="Vous souhaitez participer à une formation ? Veuillez cliquer ici pour les inscriptions !"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
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
                  link="/espace-membre/soumettre-mon-resume"
                  buttonText="Je soumets mon article / résumé pour les Journées scientifiques"
                  description="La commission scientifique analysera vos articles et résumés et vous répondra dans un délai de 72 heures"
                />
              </Grid>
            </Grid>
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
