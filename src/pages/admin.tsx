import { Typography } from "@mui/material";
import { AdminMiddleComponent } from "components/authComponent/admin/displayComponent/adminMiddleComponent";
import { GenericHeaderAihci } from "components/generic/genericHeaderAihci";
import { Layout } from "layout/layout";

export const Admin = () => {
  return (
    <Layout>
      <GenericHeaderAihci />
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Espace admin
      </Typography>
      <AdminMiddleComponent />
    </Layout>
  );
};
