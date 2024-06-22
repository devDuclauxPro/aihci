import { Box, Container, Grid, Paper } from "@mui/material";
import { RightRegistration } from "components/freedComponent/registration/rightRegistration";
import { LeftRegistrationConnection } from "components/generic/LeftRegistrationConnection";
import { Layout } from "layout/layout";

export const Registration = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Box paddingTop={12} paddingBottom={5}>
          <Paper elevation={5} sx={{ borderRadius: 3, padding: 1 }}>
            <Grid container sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
              <LeftRegistrationConnection />
              <RightRegistration />
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
};
