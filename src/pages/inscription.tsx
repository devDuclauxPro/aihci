import { Box, Container, Grid, Paper } from "@mui/material";
import { LeftInscription } from "components/freedComponent/inscription/leftInscription";
import { RightInscription } from "components/freedComponent/inscription/rightInscription";
import { Layout } from "layout/layout";

export const Inscription = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Box paddingTop={12} paddingBottom={5}>
          <Paper elevation={5} sx={{ borderRadius: 3, padding: 1 }}>
            <Grid container sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
              <LeftInscription />
              <RightInscription />
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};
