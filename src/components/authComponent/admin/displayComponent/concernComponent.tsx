import { Box, Button, Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "fakeData/data";
import { Layout } from "layout/layout";
import { FC, useState } from "react";
import { TRowData } from "types/types";
import { MessageTable } from "../tableComponent/messageTable";

export const ConcernComponent: FC = () => {
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
        <MessageTable messageProps={{ open, handleClose, selectedRow }} />
      </Container>
    </Layout>
  );
};
