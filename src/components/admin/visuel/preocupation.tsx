import { Button, Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Layout } from "layout/layout";
import { useState } from "react";
import { Message } from "./message";

interface RowData {
  id: number;
  fullName: string;
  email: string;
  contact: string;
  interne: string;
  message: string;
}

const rows: RowData[] = [
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
    interne: "Interne en pharmacie",
    message: "mon message",
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

export const Preocupation = () => {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null); // Utilisation de null comme valeur initiale

  const handleOpen = (row: RowData) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 70 },
    { field: "fullName", headerName: "Nom & prénoms", width: 150 },
    { field: "email", headerName: "Email", type: "string", width: 180 },
    { field: "contact", headerName: "Contact", type: "string", width: 150 },
    { field: "interne", headerName: "Interne en", type: "string", width: 180 },
    {
      field: "supprimer",
      type: "actions",
      width: 120,
      renderCell: (params) => (
        <Button variant="contained" color="error" size="small">
          Supprimer
        </Button>
      ),
    },
    {
      field: "togglePopper",
      type: "actions",
      width: 130,
      renderCell: (params) => (
        <Button variant="contained" color="primary" size="small" onClick={() => handleOpen(params.row)}>
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
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
        <Message messageProps={{ open, handleClose, selectedRow }} />
      </Container>
    </Layout>
  );
};
