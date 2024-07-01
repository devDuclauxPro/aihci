import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { zoomInOutGenericOne } from "animations/animation";
import { FC } from "react";
import { listCards } from "utils/listFilter";
import { BtnGeneric } from "./btnGeneric";

export const CardArticleGeneric: FC = () => {
  return (
    <Grid container spacing={2} mt={3}>
      {listCards.map((list, id) => (
        <Grid key={id} item xs={12} sm={6} lg={4}>
          <Card elevation={5} sx={{ padding: 1 }}>
            <CardActionArea disableRipple>
              <CardMedia
                component="img"
                height={160}
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
                <BtnGeneric
                  btnText="Lire plus"
                  btnLink={`/accueil/article/${list.id}`}
                  btnZooInOutCard={zoomInOutGenericOne}
                  btnSize="small"
                />
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
