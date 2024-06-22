import { Box, Button, Card } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { TMessage } from "types/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: 4,
};

export const MessageSoumis: FC<TMessage> = ({ messageProps }) => {
  return (
    <Modal
      keepMounted
      open={messageProps.open}
      onClose={messageProps.handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Card sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2" textAlign="center">
          Préocupation de {messageProps?.selectedRow?.fullName}
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ marginY: 3 }}>
          {messageProps.selectedRow ? (
            <Box>
              <Typography variant="body2" component="p">
                {messageProps.selectedRow.message}
              </Typography>
              <Button disableRipple variant="contained" color="error" fullWidth sx={{ marginTop: 3 }}>
                Supprimer le message
              </Button>
            </Box>
          ) : (
            "Aucune donnée sélectionnée"
          )}
        </Typography>
      </Card>
    </Modal>
  );
};
