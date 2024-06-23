import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useState } from "react";
import { TRowData } from "types/types";
import { ConcernMessageTable } from "./concernMessageTable";

type TRowDataSoumission = {
  id: number;
  fullName: string;
  date: string;
};
const rows: TRowDataSoumission[] = [
  {
    id: 1,
    fullName: "Snow",
    date: "21/06/2024",
  },
  {
    id: 2,
    fullName: "Lannister",
    date: "21/06/2024",
  },
  {
    id: 3,
    fullName: "Lannister",
    date: "21/06/2024",
  },
  {
    id: 4,
    fullName: "Stark",
    date: "21/06/2024",
  },
  {
    id: 5,
    fullName: "Targaryen",
    date: "21/06/2024",
  },
  {
    id: 6,
    fullName: "Melisandre",
    date: "21/06/2024",
  },
];

export const ConcernTable: FC = () => {
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
    { field: "date", headerName: "Date", type: "string", width: 180 },
    { field: "fullName", headerName: "Nom & prénoms", width: 180 },
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
    <Box marginY={2}>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Voir mes préoccupations soumises
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
      <ConcernMessageTable messageProps={{ open, handleClose, selectedRow }} />
    </Box>
  );
};
