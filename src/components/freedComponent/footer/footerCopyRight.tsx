import { Box, Typography } from "@mui/material";

export const FooterCopyRight = () => {
  return (
    <Box paddingY={1} display="flex" justifyContent="center" alignItems="center">
      <Typography variant="subtitle2" component="p" color="white">
        &copy; 2024 AIHCI. All rights reserved.
      </Typography>
    </Box>
  );
};
