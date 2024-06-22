import { Button } from "@mui/material";
import { zoomInOutGeneric } from "animations/animation";
import { FC } from "react";
import { Link } from "react-router-dom";

type IButtonGeneric = {
  btnText: string;
  btnLink?: string;
  btnColor?: "error" | "secondary" | "inherit" | "primary" | "success" | "info" | "warning";
  btnVariant?: "text" | "contained" | "outlined";
  btnSize?: "small" | "medium" | "large";
  btnZooInOutCard?: string;
};

export const BtnGeneric: FC<IButtonGeneric> = ({
  btnLink,
  btnText,
  btnColor,
  btnVariant,
  btnSize,
  btnZooInOutCard,
}) => {
  return (
    <>
      {btnLink ? (
        <Button
          disableRipple
          size={btnSize || "medium"}
          variant={btnVariant || "contained"}
          color={btnColor || "success"}
          sx={{
            textTransform: "inherit",
            "&:hover": { animation: `${btnZooInOutCard || zoomInOutGeneric} 1s infinite` },
          }}
        >
          <Link to={btnLink} style={{ color: "inherit", textDecoration: "none" }}>
            {btnText}
          </Link>
        </Button>
      ) : (
        <Button
          disableRipple
          size={btnSize || "medium"}
          variant={btnVariant || "contained"}
          color={btnColor || "success"}
          sx={{
            textTransform: "inherit",
            "&:hover": { animation: `${btnZooInOutCard || zoomInOutGeneric} 1s infinite` },
          }}
        >
          {btnText}
        </Button>
      )}
    </>
  );
};
