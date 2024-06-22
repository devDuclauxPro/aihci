import { Box, Container, Grid } from "@mui/material";
import { CardGenericComponent } from "components/generic/cardGenericComponent";
import { FC } from "react";

export const AdminMiddle: FC = () => {
  return (
    <Box bgcolor="#f2f2f6" minHeight="50vh">
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          {/* Colonne de gauche  */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <CardGenericComponent
                  btnLink="/espace-membre/admin/ajouter-un-document"
                  btnText="J'ajoute un document"
                />
              </Grid>
              <Grid item>
                <CardGenericComponent btnLink="/espace-membre/admin/rediger-article" btnText="Je redige les articles" />
              </Grid>
              <Grid item>
                <Grid item>
                  <CardGenericComponent
                    btnLink="/espace-membre/admin/ajoute-le-titre-de-la-formation"
                    btnText="J'ajoutes le titre de la formation"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Colonne de droite */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CardGenericComponent
                  btnLink="/espace-membre/admin/voir-les-preocupations"
                  btnText="Je regarde les preocupations des internes"
                  btnColor="primary"
                />
              </Grid>
              <Grid item xs={12}>
                <CardGenericComponent
                  btnLink="/espace-membre/admin/voir-les-articles-soumis"
                  btnText="Je regarde les articles soumis pour les Journées scientifiques"
                  btnColor="primary"
                />
              </Grid>
              <Grid item xs={12}>
                <CardGenericComponent
                  btnLink="/espace-membre/admin/voir-les-inscrits-de-la-formation"
                  btnText="Je regarde les inscrits de la formation"
                  btnColor="primary"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
