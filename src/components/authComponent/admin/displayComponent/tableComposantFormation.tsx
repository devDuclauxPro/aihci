import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 70 },
  { field: "date", headerName: "Date", type: "string", width: 180 },
  { field: "fullName", headerName: "Nom & prénoms", width: 150 },
  { field: "email", headerName: "Email", type: "string", width: 180 },
  { field: "contact", headerName: "Contact", type: "string", width: 150 },
  { field: "interne", headerName: "Interne en", type: "string", width: 180 },
  {
    field: "action",
    type: "actions",
    width: 130,
    renderCell: (params) => (
      <Button variant="contained" color="error" size="small">
        Supprimer
      </Button>
    ),
  },
];

const rows = [
  {
    id: 1,
    fullName: "Snow",
    date: "22/06/2024",
    email: "jon@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
  },
  {
    id: 2,
    fullName: "Lannister",
    date: "22/06/2024",
    email: "cersei@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
  },
  {
    id: 3,
    fullName: "Lannister",
    date: "22/06/2024",
    email: "jaime@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
  },
  {
    id: 4,
    fullName: "Stark",
    date: "22/06/2024",
    email: "arya@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
  },
];

export const TableComposantFormation: FC = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
