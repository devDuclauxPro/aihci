import { Box, Typography } from "@mui/material";
import { GenericHeader } from "components/generic/genericHeader";
import { MembreMiddle } from "components/membre/membreMiddle";
import aihci from "images/aihci.png";
import { Layout } from "layout/layout";
import { FC } from "react";

const aihcistyle = { width: "100%", height: "auto", cursor: "pointer" };

export const Membre: FC = () => {
  return (
    <Layout>
      <GenericHeader>
        <Box display="flex" justifyContent="center" alignContent="center">
          <Box width={160}>
            <img style={aihcistyle} src={aihci} alt="aihci" />
          </Box>
        </Box>
      </GenericHeader>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Espace membre
      </Typography>
      <MembreMiddle />
    </Layout>
  );
};
