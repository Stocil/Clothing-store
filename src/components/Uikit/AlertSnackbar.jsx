import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GppBadIcon from "@mui/icons-material/GppBad";

export function AlertSnackbar({ handleClose, open, children, error = false }) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        icon={error ? <GppBadIcon></GppBadIcon> : <AddShoppingCartIcon />}
        onClose={handleClose}
        severity={error ? "error" : "success"}
        variant="filled"
        sx={{
          m: { xs: "0 auto", sm: "auto" },
        }}
      >
        {children}
      </Alert>
    </Snackbar>
  );
}
