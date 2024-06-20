import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { FC } from "react";
import { Link } from "react-router-dom";
import { TListItemSocialNet } from "types/types";

// Composant SmalRigthFollowing qui affiche des icônes de réseaux sociaux avec des liens
export const SmalRigthFollowing: FC = () => {
  // Liste des réseaux sociaux et leurs icônes associées
  const listFollowing: TListItemSocialNet[] = [
    {
      linkTo: "https://x.com/aihci",
      icon: <XIcon color="warning" />,
    },
    {
      linkTo: "https://instagram.com/aihci",
      icon: <InstagramIcon color="warning" />,
    },
    {
      linkTo: "https://linkedin.com/in/aihci",
      icon: <LinkedInIcon color="warning" />,
    },
    {
      linkTo: "https://facebook.com/aihci",
      icon: <FacebookIcon color="warning" />,
    },
  ];

  return (
    <>
      {listFollowing.map((list, id) => (
        <Link key={id} target="_blank" to={list.linkTo} style={{ marginRight: 8 }}>
          {list.icon}
        </Link>
      ))}
    </>
  );
};
