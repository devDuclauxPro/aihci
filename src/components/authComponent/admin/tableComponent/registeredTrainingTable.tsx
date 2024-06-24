import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rowsTraining } from "fakeData/data";
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

export const RegisteredTrainingTable: FC = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsTraining}
        columns={columns}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};
