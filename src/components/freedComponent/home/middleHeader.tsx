import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { listFilter } from "../../../utils/listFilter";

// Composant MiddleHeader qui affiche une liste filtrée avec des styles spécifiques pour chaque élément
export const MiddleHeader: FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
      {listFilter.map((list, id) => (
        <Typography
          key={id}
          variant={list.name === "Tous" ? "subtitle2" : "button"}
          component="div"
          marginRight={1}
          sx={{
            cursor: "pointer",
            padding: ".5px 5px",
            borderRadius: 0.8,
            bgcolor: list.name === "Tous" ? "#4d8e4d" : "transparent",
            color: list.name === "Tous" ? "white" : "#275427",
            textTransform: list.name === "Tous" ? "none" : "inherit",
            transition: "all .5s ease 0.1s",
            "&:hover": { bgcolor: "#4d8e4d", color: "white" },
          }}
        >
          {list.name}
        </Typography>
      ))}
    </Box>
  );
};
