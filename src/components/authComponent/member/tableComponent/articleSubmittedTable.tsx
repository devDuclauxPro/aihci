import { Accordion, Typography } from "@mui/material";
import { FC } from "react";
import { ArticleSubmittedChildTable } from "./articleSubmittedChildTable";

export const ArticleSubmittedTable: FC = () => {
  return (
    <>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Voir mes articles soumis
      </Typography>
      {["Journées scientifiques J16", "Journées scientifiques J15", "Journées scientifiques J14"].map((list, id) => (
        <Accordion key={id} sx={{ marginBottom: 1 }}>
          <ArticleSubmittedChildTable list={{ list, id }} />
        </Accordion>
      ))}
    </>
  );
};
