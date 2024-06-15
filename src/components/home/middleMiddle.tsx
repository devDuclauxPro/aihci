import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { zoomInOutLeft } from "animations/animation";
import { FC } from "react";
import { listCards } from "./listFilter";

// Composant MiddleMiddle qui affiche une grille de cartes avec des informations
export const MiddleMiddle: FC = () => {
  return (
    <>
      <Grid container spacing={2} mt={3}>
        {listCards.map((list, id) => (
          <Grid key={id} item xs={12} sm={6} lg={4}>
            <Card elevation={5} sx={{ padding: 1 }}>
              <CardMedia
                component="img"
                height={150}
                width={100}
                sx={{ objectFit: "initial" }}
                image="https://fnsipbm.fr/wp-content/uploads/2023/06/CDP-768x514.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div" color="#e5691b">
                  {list.date}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div" color="#275427">
                  {list.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" fontSize={13}>
                  {list.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{
                    textTransform: "inherit",
                    "&:hover": {
                      animation: `${zoomInOutLeft} 1s infinite`,
                    },
                  }}
                >
                  Lire plus
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" marginTop={5}>
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={{
            textTransform: "inherit",
            fontWeight: 600,
            "&:hover": {
              animation: `${zoomInOutLeft} 1s infinite`,
            },
          }}
        >
          Charger plus
        </Button>
      </Box>
    </>
  );
};
