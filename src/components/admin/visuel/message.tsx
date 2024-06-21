import { Card } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FC } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type TMessage = {
  messageProps: {
    open: boolean;
    handleClose: () => void;
    selectedRow: { fullName: string; email: string; contact: string; interne: string; message: string } | null;
  };
};

export const Message: FC<TMessage> = ({ messageProps }) => {
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
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          {messageProps.selectedRow ? (
            <Typography variant="body2" component="p">
              {messageProps.selectedRow.message}
            </Typography>
          ) : (
            "Aucune donnée sélectionnée"
          )}
        </Typography>
      </Card>
    </Modal>
  );
};
