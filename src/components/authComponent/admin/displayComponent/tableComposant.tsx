import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC } from "react";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "Id", width: 70 },
  { field: "fullName", headerName: "Nom & prénoms", width: 150 },
  { field: "email", headerName: "Email", type: "string", width: 180 },
  { field: "contact", headerName: "Contact", type: "string", width: 150 },
  { field: "interne", headerName: "Interne en", type: "string", width: 180 },
  {
    field: "fichier",
    headerName: "Fichier",
    type: "string",
    width: 180,
    renderCell: (params) => (
      <Link to={`${params.value}`} target="_blank" rel="noopener noreferrer">
        Télécharger
      </Link>
    ),
  },
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
    email: "jon@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
  {
    id: 2,
    fullName: "Lannister",
    email: "cersei@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
  {
    id: 3,
    fullName: "Lannister",
    email: "jaime@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
  {
    id: 4,
    fullName: "Stark",
    email: "arya@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
  {
    id: 5,
    fullName: "Targaryen",
    email: "daenerys@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
  {
    id: 6,
    fullName: "Melisandre",
    email: "null@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
  {
    id: 7,
    fullName: "Clifford",
    email: "ferrara@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
  {
    id: 8,
    fullName: "Frances",
    email: "rossini@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
  {
    id: 9,
    fullName: "Roxie",
    email: "harvey@gmail.com",
    contact: "0707965744",
    interne: "Interne en pharmacie",
    fichier: "telecharger-mon-fichier",
  },
];

export const TableComposant: FC = () => {
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
