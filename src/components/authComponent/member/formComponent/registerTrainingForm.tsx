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

export const RegisterTrainingForm: FC = () => {
  return (
    <>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        S'inscrire à une formation
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
        <Grid item>
          <Button disableRipple type="submit" color="success" fullWidth variant="contained">
            Je clique pour m'inscrire
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
