import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Autocomplete, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { Layout } from "layout/layout";
import { FC } from "react";

// Options pour le type d'article
const typeArticle = [
  { label: "Accueil" },
  { label: "L'internat" },
  { label: "Notre association" },
  { label: "Nos partenaires" },
  { label: "Actus" },
  { label: "Qui sommes-nous" },
  { label: "Se connecter" },
  { label: "Espace Membre" },
];

export const ContentAppComponent: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ minHeight: "80vh" }}>
        {/* Titre de la page */}
        <Typography marginTop={10} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Rédiger le contenu de vos pages
        </Typography>
        {/* Formulaire principal */}
        <Grid container component="main" marginBottom={3} flexDirection="column">
          {/* Sélection du type d'article */}
          <Grid item marginBottom={1}>
            <Autocomplete
              disablePortal
              id="typeArticle"
              options={typeArticle}
              renderInput={(params) => <TextField {...params} label="Le type de la page" />}
            />
          </Grid>
          {/* Éditeur de texte */}
          <Grid item sx={{ width: "100%" }}>
            <CKEditor
              editor={Editor}
              data=""
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
            />
          </Grid>
          {/* Bouton de sauvegarde */}
          <Grid item>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sauvegarder
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
