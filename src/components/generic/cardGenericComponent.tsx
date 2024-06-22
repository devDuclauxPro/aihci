import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { TGenericCardComponent } from "types/types";
import { BtnGeneric } from "./btnGeneric";

// Composant pour afficher une carte de composant generique
export const CardGenericComponent: FC<TGenericCardComponent> = ({
  btnLink,
  btnText,
  cardDescription,
  btnColor,
  btnVariant,
  btnSize,
  btnZooInOutCard,
  cardDescriptionColor,
}) => {
  return (
    <Card elevation={3} sx={{ bgcolor: "#fcb900" }}>
      <CardActionArea disableRipple>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <BtnGeneric
            btnText={btnText}
            btnLink={btnLink}
            btnColor={btnColor}
            btnVariant={btnVariant}
            btnSize={btnSize}
            btnZooInOutCard={btnZooInOutCard}
          />
          {cardDescription && (
            <Typography
              variant="subtitle1"
              component="div"
              fontSize={16}
              textAlign="center"
              marginTop={2}
              padding={1}
              borderRadius={1.7}
              bgcolor={cardDescriptionColor || "#ffffff"}
              color="black"
            >
              {cardDescription}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
