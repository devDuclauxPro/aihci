import { Container } from "@mui/material";
import { MiddleHeader } from "components/freedComponent/home/middleHeader";
import { MiddleMiddle } from "components/freedComponent/home/middleMiddle";
import { FC } from "react";

export const ActusMiddle: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 3 }}>
      <MiddleHeader />
      <MiddleMiddle />
    </Container>
  );
};
