import { Box } from "@mui/material";
import { zoomInOutGenericOne } from "animations/animation";
import { BtnGeneric } from "components/generic/btnGeneric";
import { CardArticleGeneric } from "components/generic/cardArticleGeneric";
import { FC } from "react";

// Composant MiddleMiddle qui affiche une grille de cartes avec des informations
export const MiddleMiddle: FC = () => {
  return (
    <>
      <CardArticleGeneric />
      <Box display="flex" justifyContent="center" alignItems="center" marginTop={5}>
        <BtnGeneric btnText="Charger plus" btnZooInOutCard={zoomInOutGenericOne} />
      </Box>
    </>
  );
};
