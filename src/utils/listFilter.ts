import auf from "images/auf.png";
import boa from "images/boa.png";
import chuAngre from "images/chu-angre.png";
import chuBouake from "images/chu-bouake.jpg";
import chuCocody from "images/chu-cocody.jpg";
import chuTreichville from "images/chu-treichville.png";
import chuYopougon from "images/chu-yop.png";
import depps from "images/depps.jpg";
import sante from "images/sante.jpg";
import sma from "images/sma.png";
import spb from "images/spb.jpg";
import { TBreakpoints, TCard, TListItem } from "types/types";

// Tableau des listes de filtrage de la page d'accueil de l'application
export const listFilter: TListItem[] = [{ name: "Tous" }, { name: "Communiqué de presse" }, { name: "Evénement" }];

// Tableau des cartes de la page d'accueil de l'application
export const listCards: TCard[] = [
  {
    id: 1,
    date: "14/06/2024",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, blanditiis sint totam minus expedita",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 2,
    date: "13/06/2024",
    title: "Titre 2",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 3,
    date: "12/06/2024",
    title: "Titre 3",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 4,
    date: "11/06/2024",
    title: "Titre 4",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    id: 5,
    date: "12/06/2024",
    title: "Titre 5",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

// Tableau des images des partenaires de la page d'accueil de l'application
export const listImage: TListItem[] = [
  { name: chuAngre },
  { name: chuCocody },
  { name: chuTreichville },
  { name: chuYopougon },
  { name: chuBouake },
  { name: sante },
  { name: depps },
  { name: auf },
  { name: boa },
  { name: spb },
  { name: sma },
];

// Objet des listes de breakpoints de la page d'accueil de l'application
export const listBreackPoint: TBreakpoints = {
  // when window width is >= 0px (xs)
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  // when window width is >= 600px (sm)
  600: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  // when window width is >= 960px (md)
  960: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  // when window width is >= 1280px (lg)
  1280: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  // when window width is >= 1920px (xl)
  1920: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
};
