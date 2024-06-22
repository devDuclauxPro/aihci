import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Layout } from "layout/layout";
import { FC } from "react";
import { TitreFormation } from "../displayComponent/titreFormation";

export const AjoutTitre: FC = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ minHeight: "80vh" }}>
        <Typography marginTop={10} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Ajouter le titre de la formation
        </Typography>
        <Grid container component="main" marginBottom={3} flexDirection="column">
          <Grid item>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Titre du document"
              name="title"
              autoComplete="title"
              autoFocus
            />
          </Grid>
          <Grid item>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Ajouter
            </Button>
          </Grid>
        </Grid>
        <TitreFormation />
      </Container>
    </Layout>
  );
};
