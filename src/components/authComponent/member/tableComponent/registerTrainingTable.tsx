import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

export const RegisterTrainingTable: FC = () => {
  return (
    <Box gap={2} display="flex" alignItems="center">
      <Typography variant="body2" component="p">
        Formation à laquelle je me suis inscrit
      </Typography>
      <Typography variant="body2" component="p" color="#ff6900">
        En attente de validation
      </Typography>
      <Button variant="contained" color="error" size="small">
        Je ne participerai plus
      </Button>
    </Box>
  );
};
