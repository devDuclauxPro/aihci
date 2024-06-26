import { MenuIconGeneric } from "components/generic/menuIconGeneric";
import { FC } from "react";
import { Link } from "react-router-dom";
import { TListItemSocialNet } from "types/types";

// Composant SmalRigthFollowing qui affiche des icônes de réseaux sociaux avec des liens
export const SmalRigthFollowing: FC = () => {
  const socialMediaLinks: TListItemSocialNet[] = MenuIconGeneric();

  return (
    <>
      {socialMediaLinks.map((list, id) => (
        <Link key={id} target="_blank" to={list.linkTo} style={{ marginRight: 8 }}>
          {list.icon}
        </Link>
      ))}
    </>
  );
};
