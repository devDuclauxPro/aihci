import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC } from "react";

type TRowDataTitre = {
  id: number;
  titre: string;
};

const rows: TRowDataTitre[] = [
  { id: 1, titre: "Snow" },
  { id: 2, titre: "Lannister" },
  { id: 3, titre: "Lannister" },
  { id: 4, titre: "Stark" },
];

export const TitleTrainingTable: FC = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 70 },
    { field: "titre", headerName: "Titre de la formation", width: 180 },

    {
      field: "togglePopper",
      type: "actions",
      width: 180,
      renderCell: (params) => (
        <Button disableRipple variant="contained" color="error" size="small">
          Supprimer
        </Button>
      ),
    },
  ];

  return (
    <Box marginY={3}>
      <Typography variant="h4" component="div" textAlign="center" fontWeight={300} paddingY={2}>
        Voir le titre des formations créées
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
    </Box>
  );
};
