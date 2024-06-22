import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
import { AdminCardDocument } from "../cardComponent/adminCardDocument";
import { AdminCardFormTheo } from "../cardComponent/adminCardFormTheo";
import { AdminCardProbleme } from "../cardComponent/adminCardProbleme";
import { AdminCardSoumission } from "../cardComponent/adminCardSoumission";

export const AdminMiddle: FC = () => {
  return (
    <Box bgcolor="#f2f2f6" minHeight="50vh">
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          {/* Colonne de gauche  */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <AdminCardDocument link="/espace-membre/admin/ajouter-un-document" buttonText="J'ajoute un document" />
              </Grid>
              <Grid item>
                <AdminCardDocument link="/espace-membre/admin/rediger-article" buttonText="Je redige les articles" />
              </Grid>
              <Grid item>
                <AdminCardDocument
                  link="/espace-membre/admin/ajoute-le-titre-de-la-formation"
                  buttonText="J'ajoutes le titre de la formation"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Section Filières de l'internat */}
              <Grid item xs={12}>
                <AdminCardProbleme
                  link="/espace-membre/admin/voir-les-preocupations"
                  buttonText="Je regarde les preocupations des internes"
                />
              </Grid>
              <Grid item xs={12}>
                <AdminCardSoumission
                  link="/espace-membre/admin/voir-les-articles-soumis"
                  buttonText="Je regarde les articles soumis pour les Journées scientifiques"
                />
              </Grid>
              <Grid item xs={12}>
                <AdminCardFormTheo
                  link="/espace-membre/admin/voir-les-inscrits-de-la-formation"
                  buttonText="Je regarde les inscrits de la formation"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
