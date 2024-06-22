import { Box, MenuItem, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { menuList } from "utils/listTable";

// Composant FooterListMenu qui affiche une liste de liens de menu dans le pied de page
export const FooterListMenu: FC = () => {
  return (
    <Box
      paddingTop={3}
      flexGrow={1}
      sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", justifyContent: "center" }}
    >
      {menuList.map((list, id) => (
        <MenuItem key={id}>
          <Typography variant="subtitle2" color="white">
            <Link to={list.link} style={{ textDecoration: "none", color: "inherit" }}>
              {list.name}
            </Link>
          </Typography>
        </MenuItem>
      ))}
    </Box>
  );
};
