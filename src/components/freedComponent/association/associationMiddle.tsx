import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { zoomInOutGenericOne } from "animations/animation";
import { BtnGeneric } from "components/generic/btnGeneric";
import { textAdhesion } from "utils/textAdhesion";

export const AssociationMiddle = () => {
  return (
    <Box sx={{ padding: 5 }}>
      <Container maxWidth="lg">
        {/* Titre principal */}
        <Typography variant="h5" component="h1" color="#ff6900" fontWeight={600} marginBottom={3}>
          01 association pour 11 zones d'affectation
        </Typography>

        {/* Description principale */}
        <Typography variant="body1" component="p">
          L'AIHCI est constitué d'internes en Médecine et en Pharmacie, répartis sur toute la Côte d'Ivoire.
          L'association représente les internes en Médecine et en Pharmacie dans chacune des zones d’affectation
          concernées.
        </Typography>

        {/* Carte Google Maps */}
        <Box sx={{ marginY: 3 }}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1g0OMzFHl5bYcWN5dg9AkAi3yBrfqnyM&ehbc=2E312F&noprof=1"
            width="100%"
            height="480"
            title="Repartition des internes"
            loading="lazy"
          ></iframe>
        </Box>

        {/* Pourquoi adhérer */}
        <Typography variant="h5" component="h1" color="#ff6900" fontWeight={600} marginBottom={3}>
          Pourquoi adhérer ?
        </Typography>

        {/* Avantages de l'adhésion (liste à puces) */}
        <Typography variant="body1" component="p" marginBottom={3}>
          En tant qu’interne, adhérer à l'AIHCI apporte de multiples bénéfices :
        </Typography>
        <List>
          {textAdhesion.map((text, id) => (
            <ListItem key={id} disablePadding>
              <Typography variant="body1" component="div" fontWeight={300}>
                {text.texte}
              </Typography>
            </ListItem>
          ))}
        </List>

        {/* Recommandation d'adhésion directe */}
        <Typography variant="h5" component="h1" color="#ff6900" fontWeight={600} marginY={3}>
          Adhérer directement à l'AIHCI
        </Typography>

        {/* Description de l'adhésion directe */}
        <Typography variant="body1" component="div" fontWeight={300}>
          Nous recommandons aux internes d’adhérer directement à l’association de leur zone d’affectation à travers les
          chefs de village. Leur présence sur le terrain leur permet de mieux comprendre votre situation.
        </Typography>

        {/* Bouton d'adhésion */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 3 }}>
          <BtnGeneric
            btnText="Adhérer à l'AIHCI"
            btnLink="/inscription"
            btnZooInOutCard={zoomInOutGenericOne}
            btnSize="small"
          />
        </Box>
      </Container>
    </Box>
  );
};
