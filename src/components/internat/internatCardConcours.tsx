import { Button, Card, CardContent, Typography } from "@mui/material";
import { zoomInOutInternatConcours } from "animations/animation";
import { FC } from "react";
import { Link } from "react-router-dom";
import { TInternatInfoCard } from "types/types";

// Composant pour afficher une carte concours pour l'internat
export const InternatCardConcours: FC<TInternatInfoCard> = ({ link, buttonText, description }) => {
  return (
    <Card elevation={3} sx={{ bgcolor: "#fcb900" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "inherit", "&:hover": { animation: `${zoomInOutInternatConcours} 1s infinite` } }}
        >
          <Link to={link} style={{ color: "inherit", textDecoration: "none" }}>
            {buttonText}
          </Link>
        </Button>
        {description && (
          <Typography
            variant="subtitle1"
            component="div"
            fontSize={16}
            textAlign="center"
            marginTop={2}
            padding={1}
            borderRadius={1.7}
            bgcolor="#ffffff"
            color="black"
          >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
