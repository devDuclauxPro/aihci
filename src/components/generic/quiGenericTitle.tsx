import { Typography } from "@mui/material";
import { FC } from "react";

export const QuiGenericTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Typography variant="h3" component="h1" color="#ff6900" textAlign="center">
      {title}
    </Typography>
  );
};
