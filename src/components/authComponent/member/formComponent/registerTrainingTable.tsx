import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import { FC } from "react";

export const RegisterTrainingTable: FC = () => {
  return (
    <>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Voir mes inscriptions aux formations
      </Typography>
      {["Journées scientifiques J16", "Journées scientifiques J15", "Journées scientifiques J14"].map((list, id) => (
        <Accordion key={id} sx={{ marginBottom: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`ancien-bureau-${id + 1}`}
            id={`ancien-bureau-${id + 1}`}
            sx={{ bgcolor: "#9db69d", fontWeight: 600, color: "white" }}
          >
            {list}
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
