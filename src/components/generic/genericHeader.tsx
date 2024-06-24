import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

const aihcistyle = { width: "100%", height: "auto", cursor: "pointer" };

export const GenericHeader: FC<{ children?: ReactNode; imageHeader?: string }> = ({ children, imageHeader }) => {
  return (
    <Box paddingBottom={5} paddingTop={12} bgcolor="#bcbcbc" display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ width: { xs: 300, sm: 400, md: 500 } }} paddingX={5}>
        {imageHeader ? (
          <Box display="flex" justifyContent="center" alignContent="center">
            <Box width={160}>
              <img style={aihcistyle} src={imageHeader} alt="aihci" />
            </Box>
          </Box>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};
