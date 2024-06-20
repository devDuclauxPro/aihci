import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
import { AdminCardDocument } from "./adminCardDocument";
import { AdminCardFormTheo } from "./adminCardFormTheo";
import { AdminCardProbleme } from "./adminCardProbleme";
import { AdminCardProcuration } from "./adminCardProcuration";
import { AdminCardSoumission } from "./adminCardSoumission";

export const AdminMiddle: FC = () => {
  return (
    <Box bgcolor="#f2f2f6">
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          {/* Colonne de gauche  */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <AdminCardProcuration
                  link="/espace-membre/admin/ajouter-une-procuration"
                  buttonText="J'ajoute une procurations"
                />
              </Grid>
              <Grid item>
                <AdminCardDocument
                  link="/espace-membre/admin/ajouter-un-autre-document"
                  buttonText="J'ajoute un autre document"
                />
              </Grid>
              <Grid item>
                <AdminCardFormTheo
                  link="/espace-membre/admin/voir-les-inscrits-de-la-formation"
                  buttonText="Je regarde les inscrits de la formation"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              {/* Section Filières de l'internat */}
              <Grid item xs={12}>
                <AdminCardProbleme
                  link="/espace-membre/admin/voir-les-preocupations"
                  buttonText="Je les preocupation des internes"
                />
              </Grid>
              <Grid item xs={12}>
                <AdminCardSoumission
                  link="/espace-membre/admin/voir-les-articles-soumis"
                  buttonText="Je regarde les articles soumis pour les Journées scientifiques"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
