import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

type IButtonGeneric = {
  zooInOutCard: string;
  link: string;
  buttonText: string;
  couleur?: "error" | "secondary" | "inherit" | "primary" | "success" | "info" | "warning";
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
};

export const ButtonGeneric: FC<IButtonGeneric> = ({ zooInOutCard, link, buttonText, couleur, variant, size }) => {
  return (
    <Button
      size={size || "medium"}
      variant={variant || "contained"}
      color={couleur || "success"}
      sx={{ textTransform: "inherit", "&:hover": { animation: `${zooInOutCard} 1s infinite` } }}
    >
      <Link to={link} style={{ color: "inherit", textDecoration: "none" }}>
        {buttonText}
      </Link>
    </Button>
  );
};
