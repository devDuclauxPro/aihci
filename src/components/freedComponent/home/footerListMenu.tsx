import { Box, MenuItem, Typography } from "@mui/material";
import { menuList } from "components/freedComponent/appBar/listTable";
import { FC } from "react";
import { Link } from "react-router-dom";

// Composant FooterListMenu qui affiche une liste de liens de menu dans le pied de page
export const FooterListMenu: FC = () => {
  return (
    <Box flexGrow={1} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
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
