import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Autocomplete } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const profession = [
  { label: "Interne en médecine" },
  { label: "Interne en pharmacie" },
  { label: "Interne en odonto" },
];
const ville = [{ label: "Abidjan" }, { label: "Bouaké" }, { label: "Yamoussoukro" }];

export const RightInscription: FC = () => {
  return (
    <Grid item xs={12} md={6}>
      <Grid container component="main">
        <Grid xs={12} item>
          <Box sx={{ mx: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Adhésion
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid spacing={1} container>
                <Grid item xs={12} md={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Votre nom complet"
                    name="name"
                    type="text"
                    autoComplete="name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Votre adresse email"
                    type="email"
                    id="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    disablePortal
                    id="profession"
                    options={profession}
                    renderInput={(params) => <TextField {...params} label="Votre profession" />}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    disablePortal
                    id="profession"
                    options={ville}
                    renderInput={(params) => <TextField {...params} label="Votre ville actuelle" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="telephone"
                    label="Votre contact"
                    type="tel"
                    id="telephone"
                    autoComplete="telephone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Votre mot de passe"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Confirmer votre mot de passe"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                S'inscrire
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Mot de passe oublié ?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
