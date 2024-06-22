import { Typography } from "@mui/material";

export const LeftContent = ({ content }: { content: string }) => {
  return (
    <Typography variant="body1" textAlign="center" marginBottom={3}>
      {content}
    </Typography>
  );
};
