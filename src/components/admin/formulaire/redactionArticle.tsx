import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Autocomplete, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Layout } from "layout/layout";
import { FC } from "react";

const typeArticle = [{ label: "Communiqué de presse" }, { label: "Evènement" }];

export const RedactionArticle: FC = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography marginTop={10} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Rediger votre article
        </Typography>
        <Grid container component="main" marginBottom={3} flexDirection="column">
          <Grid item>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Titre de l'article"
              name="title"
              autoComplete="title"
              autoFocus
            />
          </Grid>
          <Grid item>
            <Autocomplete
              disablePortal
              id="typeArticle"
              options={typeArticle}
              renderInput={(params) => <TextField {...params} label="Le type de l'article" />}
            />
          </Grid>
          <Grid item sx={{ "& .ck-editor__editable_inline": { minHeight: "400px" } }}>
            <CKEditor
              editor={ClassicEditor}
              data=""
              config={{
                toolbar: [
                  "heading",
                  "|",
                  "alignment",
                  "bold",
                  "italic",
                  "underline",
                  "strikethrough",
                  "code",
                  "subscript",
                  "superscript",
                  "|",
                  "link",
                  "bulletedList",
                  "numberedList",
                  "todoList",
                  "|",
                  "indent",
                  "outdent",
                  "blockQuote",
                  "insertTable",
                  "mediaEmbed",
                  "imageUpload",
                  "|",
                  "fontColor",
                  "fontBackgroundColor",
                  "highlight",
                  "|",
                  "horizontalLine",
                  "pageBreak",
                  "removeFormat",
                  "|",
                  "undo",
                  "redo",
                ],
                image: {
                  toolbar: [
                    "imageTextAlternative",
                    "imageStyle:inline",
                    "imageStyle:block",
                    "imageStyle:side",
                    "linkImage",
                  ],
                },
                table: {
                  contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
                },
              }}
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
            />
          </Grid>
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
