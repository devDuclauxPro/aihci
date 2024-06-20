import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { zoomInOutLeft } from "animations/animation";
import { listCards } from "components/freedComponent/home/listFilter";
import { ButtonGeneric } from "components/generic/buttonGeneric";
import aihciLogo from "images/aihci.png";
import offresPartenaires from "images/offres-partenaires.png";
import { FC } from "react";

// Composant PartenaireMiddle affiche une liste de cartes représentant les partenaires ou les offres.
export const PartenaireMiddle: FC = () => {
  const partenairesImage = aihciLogo;
  const offresImage = offresPartenaires;

  return (
    <Container maxWidth="lg">
      <Box paddingY={3} display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ width: { xs: 300 } }} paddingX={5}>
          <img width="100%" style={{ objectFit: "cover" }} src={offresImage} alt="Offres des partenaires" />
        </Box>
      </Box>
      <Box marginBottom={3}>
        <Grid container spacing={2} mt={3}>
          {listCards.map((item, id) => (
            <Grid key={id} item xs={12} sm={6} lg={4}>
              <Card elevation={5} sx={{ padding: 1 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={150}
                    sx={{ objectFit: "cover" }}
                    image={partenairesImage}
                    title="Logo AIHCI"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="div" color="#e5691b">
                      {item.date}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="div" color="#275427">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" fontSize={13}>
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ButtonGeneric
                      buttonText="En savoir plus"
                      link="/qui-sommes-nous"
                      zooInOutCard={zoomInOutLeft}
                      size="small"
                    />
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
