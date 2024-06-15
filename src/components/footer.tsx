import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { FooterListMenu } from "./home/footerListMenu";
import { SmalRigthFollowing } from "./home/smalRigthFollowing";

// Composant Footer qui inclut le menu de la liste de pied de page et le suivi à droite
export const Footer: FC = () => {
  return (
    <Box bgcolor="#275427">
      <Box paddingY={3} display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
        <FooterListMenu />
        <SmalRigthFollowing />
      </Box>
      <Box paddingY={1} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="subtitle2" component="p" color="white">
          &copy; 2024 AIHCI. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
