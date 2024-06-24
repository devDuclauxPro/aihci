import { Typography } from "@mui/material";
import { MemberMiddle } from "components/authComponent/member/memberMiddle";
import { GenericHeader } from "components/generic/genericHeader";
import aihci from "images/aihci.png";
import { Layout } from "layout/layout";
import { FC } from "react";

export const Member: FC = () => {
  return (
    <Layout>
      <GenericHeader imageHeader={aihci} />
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Espace membre
      </Typography>
      <MemberMiddle />
    </Layout>
  );
};
