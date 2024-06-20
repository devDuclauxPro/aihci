import { Box, Container, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

type TArticle = {
  id: string | undefined;
  title: string;
  content: string;
  date: string;
};

export const ArticleHeader: FC = () => {
  const { id } = useParams<string>();

  const Article: TArticle = {
    id: id,
    title: "Mon titre",
    content: "Mon contenue",
    date: "20/06/2024",
  };

  return (
    <Container maxWidth="lg" sx={{ marginY: 3, minHeight:"100vh" }}>
      <Paper elevation={5} sx={{ borderRadius: 3, padding: 1 }}>
        <Box>
          <Typography variant="h5" component="h1">
            {Article.title} {Article.id}
          </Typography>
        </Box>
        <Box>
          <Typography>{Article.date}</Typography>
        </Box>
        <Box>
          <Typography>{Article.content}</Typography>
        </Box>
      </Paper>
    </Container>
  );
};
