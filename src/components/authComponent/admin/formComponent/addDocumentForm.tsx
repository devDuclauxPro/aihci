import { Autocomplete, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Layout } from "layout/layout";
import { FC } from "react";

const typeDocument = [
  { label: "Procuration" },
  { label: "Programme de garde" },
  { label: "Fiche de choix des postes" },
  { label: "Autres documents" },
];

export const AddDocumentForm: FC = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ minHeight: "80vh" }}>
        <Typography marginTop={10} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Ajouter un document
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
          <Grid item marginBottom={1}>
            <Autocomplete
              disablePortal
              id="typeDocument"
              options={typeDocument}
              renderInput={(params) => <TextField {...params} label="Le type du document *" />}
            />
          </Grid>
          <Grid item marginBottom={1}>
            <TextField margin="normal" required fullWidth id="fichier" name="fichier" type="file" autoFocus />
          </Grid>
          <Grid item>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Ajouter
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
