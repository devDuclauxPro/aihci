import { TMenuItem } from "types/types";

// Tableau des menus de l'application
export const menuList: TMenuItem[] = [
  {
    name: "Accueil",
    link: "/accueil",
  },
  {
    name: "L'internat",
    link: "/linternat",
  },
  {
    name: "Notre association",
    link: "/notre-association",
  },
  {
    name: "Nos partenaires",
    link: "/nos-partenaires",
  },
  {
    name: "Actus",
    link: "/actualites",
  },
  {
    name: "Qui sommes-nous",
    link: "/qui-sommes-nous",
  },
  {
    name: "Se connecter",
    link: "/se-connecter", // Corrigé : lien vers "se connecter"
  },
  {
    name: "Espace jobs",
    link: "/espace-jobs",
  },
];
