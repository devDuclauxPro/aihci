import { Box, Container, Grid, Paper } from "@mui/material";
import { LeftConnexion } from "components/freedComponent/connexion/leftConnexion";
import { RightConnexion } from "components/freedComponent/connexion/rightConnexion";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel Connexion
export const Connexion: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Box paddingTop={12} paddingBottom={5}>
          <Paper elevation={5} sx={{ borderRadius: 3, padding: 1 }}>
            <Grid container sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
              <LeftConnexion />
              <RightConnexion />
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};
