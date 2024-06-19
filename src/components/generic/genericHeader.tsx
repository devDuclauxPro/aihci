import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

export const GenericHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box paddingBottom={5} paddingTop={12} bgcolor="#bcbcbc" display="flex" justifyContent="center" alignItems="center">
      <Box sx={{ width: { xs: 300, sm: 400, md: 500 } }} paddingX={5}>
        {children}
      </Box>
    </Box>
  );
};
