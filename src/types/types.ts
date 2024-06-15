import { ReactNode } from "react";

// Type utilisé pour le menu de l'application
export type TMenuItem = {
  name: string;
  link: string;
};

// Type utilisé pour les reseaux sociaux de l'application
export type TListItemSocialNet = {
  linkTo: string;
  icon: ReactNode;
};

// Type utilisé dans le swiper d'image du composant homeFooter et dans le filtre
export type TListItem = {
  name: string;
};

// Type utilisé dans les cartes de l'application
export type TCard = {
  date: string;
  title: string;
  content: string;
};

// Type utilisé pour le paramètre du composant de l'image
export type TImageSwiperProps = {
  listImage: TListItem[];
};

// Type utilisé pour les breakpoints de l'application
export type TBreakpoints = {
  [key: number]: {
    slidesPerView: number;
    spaceBetween: number;
  };
};
