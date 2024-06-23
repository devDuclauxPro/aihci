import { Autocomplete } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const typeDocument = [
  { label: "Journées scientifiques J16" },
  { label: "Journées scientifiques J15" },
  { label: "Journées scientifiques J14" },
  { label: "Journées scientifiques J13" },
];

export const ArticleSubmittedForm: FC = () => {
  return (
    <>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Soumettre un article ou un résumé
      </Typography>
      <Grid container component="main" marginBottom={3} flexDirection="column">
        <Grid item marginBottom={1}>
          <Autocomplete
            disablePortal
            id="typeDocument"
            options={typeDocument}
            renderInput={(params) => <TextField {...params} label="Précisez la journée *" />}
          />
        </Grid>
        <Grid item marginBottom={1}>
          <TextField margin="normal" required fullWidth id="fichier" name="fichier" type="file" autoFocus />
        </Grid>
        <Grid item>
          <Button type="submit" fullWidth variant="contained">
            Je soumets mon document
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
