import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { TListItemSocialNet } from "types/types";

export const MenuIconGeneric = (): TListItemSocialNet[] => {
  // Liste des réseaux sociaux et leurs icônes associées
  const listFollowing: TListItemSocialNet[] = [
    { linkTo: "https://x.com/aihci", icon: <XIcon color="warning" /> },
    { linkTo: "https://instagram.com/aihci", icon: <InstagramIcon color="warning" /> },
    { linkTo: "https://linkedin.com/in/aihci", icon: <LinkedInIcon color="warning" /> },
    { linkTo: "https://facebook.com/aihci", icon: <FacebookIcon color="warning" /> },
  ];
  return listFollowing;
};
