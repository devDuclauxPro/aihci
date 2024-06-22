import { Box } from "@mui/material";
import { MenuIconGeneric } from "components/generic/menuIconGeneric";
import { FC } from "react";
import { Link } from "react-router-dom";
import { TListItemSocialNet } from "types/types";

// Composant footerFollowingIcon qui affiche des icônes de réseaux sociaux avec des liens
export const FooterFollowingIcon: FC = () => {
  const socialMediaLinks: TListItemSocialNet[] = MenuIconGeneric();

  return (
    <Box paddingTop={3} display="flex" justifyContent="center" alignItems="center">
      {socialMediaLinks.map((list, id) => (
        <Link key={id} target="_blank" to={list.linkTo} style={{ marginRight: 8 }}>
          {list.icon}
        </Link>
      ))}
    </Box>
  );
};
