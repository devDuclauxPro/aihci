import { Typography } from "@mui/material";
import { MembreMiddle } from "components/authComponent/membre/memberMiddle";
import { GenericHeaderAihci } from "components/generic/genericHeaderAihci";
import { Layout } from "layout/layout";
import { FC } from "react";

export const Membre: FC = () => {
  return (
    <Layout>
      <GenericHeaderAihci />
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Espace membre
      </Typography>
      <MembreMiddle />
    </Layout>
  );
};
