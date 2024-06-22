import { Box, Container } from "@mui/material";
import { FooterCopyRight } from "components/freedComponent/footer/footerCopyRight";
import { FooterFollowingIcon } from "components/freedComponent/footer/footerFollowingIcon";
import { FooterListMenu } from "components/freedComponent/footer/footerListMenu";
import { FC } from "react";

// Composant Footer qui inclut le menu de la liste de pied de page et le suivi à droite
export const Footer: FC = () => {
  return (
    <Box bgcolor="#275427">
      <Container maxWidth="lg">
        <FooterListMenu />
        <FooterFollowingIcon />
        <FooterCopyRight />
      </Container>
    </Box>
  );
};
