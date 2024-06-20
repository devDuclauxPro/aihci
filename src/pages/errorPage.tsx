import { Box, Container, Typography } from "@mui/material";
import error404 from "images/404.png";
import { Layout } from "layout/layout";
import { FC } from "react";

const aihcistyle = { width: "100%", height: "auto", cursor: "pointer" };

export const ErrorPage: FC = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box marginTop={10} display="flex" justifyContent="center" alignContent="center">
          <Box width={460}>
            <img style={aihcistyle} src={error404} alt="error 404" />
          </Box>
        </Box>
        <Box>
          <Typography marginY={3} variant="h4" component="h1" textAlign="center">
            Oops... La page n'a pas pu être trouvée!
          </Typography>
        </Box>
        <Box>
          <Typography marginY={3} variant="h6" component="h1" textAlign="center" fontWeight={300}>
            La page que vous recherchez n'est pas disponible, veuillez vérifier l'URL vers laquelle vous vous dirigez.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};
