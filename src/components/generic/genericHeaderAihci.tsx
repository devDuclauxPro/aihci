import { Box } from "@mui/material";
import { GenericHeader } from "components/generic/genericHeader";
import aihci from "images/aihci.png";
import { FC } from "react";

const aihcistyle = { width: "100%", height: "auto", cursor: "pointer" };

export const GenericHeaderAihci: FC = () => {
  return (
    <GenericHeader>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Box width={160}>
          <img style={aihcistyle} src={aihci} alt="aihci" />
        </Box>
      </Box>
    </GenericHeader>
  );
};
