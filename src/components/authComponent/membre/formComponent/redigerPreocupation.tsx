import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { Layout } from "layout/layout";
import { FC } from "react";
import { PreocupationSoumise } from "../displayComponent/preocupationSoumise";

export const RedigerPreocupation: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography marginTop={10} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Rediger votre préocupation
        </Typography>
        <Grid container component="main" flexDirection="column">
          <Grid item sx={{ width: "100%" }}>
            <CKEditor
              editor={Editor}
              data=""
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
            />
          </Grid>
          <Grid item marginTop={1}>
            <Button type="submit" fullWidth variant="contained">
              Envoyer
            </Button>
          </Grid>
        </Grid>
        <PreocupationSoumise />
      </Container>
    </Layout>
  );
};
