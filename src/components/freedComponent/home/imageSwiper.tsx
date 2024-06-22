import { Box } from "@mui/material";
import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TImageSwiperProps } from "types/types";
import { listBreackPoint } from "../../../utils/listFilter";

// Composant ImageSwiper qui affiche un carrousel d'images avec Swiper
export const ImageSwiper: FC<TImageSwiperProps> = ({ listImage }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]} // Modules Swiper utilisés
      spaceBetween={2}
      loop={true}
      autoplay={{ delay: 2500 }} // Défilement automatique avec délai de 2500ms
      navigation={true}
      breakpoints={listBreackPoint} // Points de rupture pour la réactivité
    >
      {listImage.map((list, id) => (
        <SwiperSlide key={id}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              style={{ objectFit: "contain", width: 100, height: 100 }}
              src={list.name}
              alt={`Images ${id}`}
              loading="lazy"
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
