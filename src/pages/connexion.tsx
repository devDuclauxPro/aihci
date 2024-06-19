import { Box, Container, Grid, Paper } from "@mui/material";
import { LeftConnexion } from "components/connexion/leftConnexion";
import { RightConnexion } from "components/connexion/rightConnexion";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel Connexion
export const Connexion: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Box paddingTop={12} paddingBottom={5}>
          <Paper elevation={5} sx={{ borderRadius: 3, padding: 1 }}>
            <Grid container>
              <LeftConnexion />
              <RightConnexion />
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};
