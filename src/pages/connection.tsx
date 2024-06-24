import { Box, Container, Grid, Paper } from "@mui/material";
import { RightConnection } from "components/freedComponent/connection/rightConnection";
import { LeftRegistrationConnection } from "components/generic/LeftRegistrationConnection";
import { Layout } from "layout/layout";
import { FC } from "react";

// Définition du composant fonctionnel Connexion
export const Connection: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Box paddingTop={12} paddingBottom={5}>
          <Paper elevation={5} sx={{ borderRadius: 3, padding: 1 }}>
            <Grid container sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
              <LeftRegistrationConnection btnLink="/inscription" btnText="Adhérer à l'AIHCI" />
              <RightConnection />
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};
