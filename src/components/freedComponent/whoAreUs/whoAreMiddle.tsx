import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { listCards } from "utils/listFilter";

// URL de l'image par défaut
const defaultImageUrl =
  "https://media.gqmagazine.fr/photos/603cd815a9360b0585bcbbac/master/pass/mark_zuckerberg__3021.jpg";

// Composant QuiSommesMiddle affiche une liste de cartes représentant les membres du Bureau Exécutif National.
export const WhoAreMiddle: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginY: 3 }}>
      <Typography variant="h3" component="h1" color="#ff6900" textAlign="center">
        Bureau Exécutif National
      </Typography>
      <Grid container spacing={2} mt={3}>
        {listCards.map((item, id) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
            <Card elevation={0} sx={{ padding: 1 }}>
              <CardActionArea disableRipple>
                <CardMedia
                  component="img"
                  sx={{ objectFit: "cover", borderRadius: 5 }}
                  image={defaultImageUrl} // Utilisation de l'URL dynamique de votre modèle de données ou de l'image par défaut
                  title={item.title} // Utilisation du titre dynamique de votre modèle de données
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" color="textPrimary" textAlign="center">
                    {item.date} Président
                  </Typography>
                  <Typography variant="body2" component="div" color="textSecondary" textAlign="center">
                    {item.title} Diallo
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
