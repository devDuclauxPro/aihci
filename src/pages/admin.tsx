import { Typography } from "@mui/material";
import { AdminMiddle } from "components/admin/affichage/adminMiddle";
import { GenericHeaderAihci } from "components/generic/genericHeaderAihci";
import { Layout } from "layout/layout";

export const Admin = () => {
  return (
    <Layout>
      <GenericHeaderAihci />
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Espace admin
      </Typography>
      <AdminMiddle />
    </Layout>
  );
};
