import { Box, Button, Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Layout } from "layout/layout";
import { FC, useState } from "react";
import { TRowData } from "types/types";
import { Message } from "./message";

const rows: TRowData[] = [
  {
    id: 1,
    fullName: "Snow",
    email: "jon@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    message: "mon message",
  },
  {
    id: 2,
    fullName: "Lannister",
    email: "cersei@gmail.com",
    contact: "0707965744",
    interne: "Interne en médecine",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur ea expedita, non, dolores enim odit similique autem dignissimos quaerat odio eum iure sit quas eligendi amet ratione ullam mollitia omnis cupiditate esse ipsa! Blanditiis rerum dolor modi tempora. Maiores, reprehenderit? Et quidem adipisci magnam dignissimos nobis minus fugiat hic libero consequuntur impedit quae dolorem omnis facere nihil expedita, dolor labore quod atque molestias ad culpa! Nesciunt amet suscipit modi dignissimos magnam sit alias repudiandae eum nostrum voluptas ipsa consectetur molestias repellat ab harum officia officiis quidem numquam adipisci aut illum pariatur dolores, similique est! Porro natus distinctio quos corrupti, fugiat omnis illo assumenda dignissimos. Nemo voluptate debitis, nulla cum ea corrupti earum quibusdam autem officia dignissimos. Nulla, maxime praesentium.",
  },
  {
    id: 3,
    fullName: "Lannister",
    email: "jaime@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    message: "mon message",
  },
  {
    id: 4,
    fullName: "Stark",
    email: "arya@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    message: "mon message",
  },
  {
    id: 5,
    fullName: "Targaryen",
    email: "daenerys@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    message: "mon message",
  },
  {
    id: 6,
    fullName: "Melisandre",
    email: "null@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    message: "mon message",
  },
  {
    id: 7,
    fullName: "Clifford",
    email: "ferrara@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    message: "mon message",
  },
  {
    id: 8,
    fullName: "Frances",
    email: "rossini@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    message: "mon message",
  },
  {
    id: 9,
    fullName: "Roxie",
    email: "harvey@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    message: "mon message",
  },
];

export const Preocupation: FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TRowData | null>(null);

  const handleOpen = (row: TRowData) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 70 },
    { field: "fullName", headerName: "Nom & prénoms", width: 180 },
    { field: "email", headerName: "Email", type: "string", width: 180 },
    { field: "contact", headerName: "Contact", type: "string", width: 180 },
    { field: "interne", headerName: "Interne en", type: "string", width: 180 },
    {
      field: "togglePopper",
      type: "actions",
      width: 180,
      renderCell: (params) => (
        <Button disableRipple variant="contained" color="primary" size="small" onClick={() => handleOpen(params.row)}>
          Voir message
        </Button>
      ),
    },
  ];

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ marginY: 3, minHeight: "70vh" }}>
        <Typography marginTop={12} variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
          Voir les préoccupations des internes
        </Typography>
        <Box style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
        <Message messageProps={{ open, handleClose, selectedRow }} />
      </Container>
    </Layout>
  );
};
