import { Typography } from "@mui/material";
import { MemberMiddle } from "components/authComponent/member/memberMiddle";
import { GenericHeaderAihci } from "components/generic/genericHeaderAihci";
import { Layout } from "layout/layout";
import { FC } from "react";

export const Member: FC = () => {
  return (
    <Layout>
      <GenericHeaderAihci />
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Espace membre
      </Typography>
      <MemberMiddle />
    </Layout>
  );
};
