import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { zoomInOutInternatRech } from "animations/animation";
import { ButtonGeneric } from "components/generic/buttonGeneric";
import { FC } from "react";
import { TInternatInfoCard } from "types/types";

// Composant pour afficher une carte d'information sur la recherche durant l'internat
export const AdminCardSoumission: FC<TInternatInfoCard> = ({ link, buttonText, description }) => {
  return (
    <Card elevation={3} sx={{ bgcolor: "#fcb900" }}>
      <CardActionArea disableRipple>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonGeneric buttonText={buttonText} link={link} zooInOutCard={zoomInOutInternatRech} couleur="primary" />
          {description && (
            <Typography
              variant="subtitle1"
              component="div"
              fontSize={16}
              textAlign="center"
              marginTop={2}
              padding={1}
              borderRadius={1.7}
              bgcolor="white"
            >
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
