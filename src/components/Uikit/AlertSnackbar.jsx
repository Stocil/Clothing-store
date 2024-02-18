import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export function AlertSnackbar({ handleClose, open, children }) {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        icon={<AddShoppingCartIcon />}
        onClose={handleClose}
        severity="success"
        variant="filled"
      >
        {children}
      </Alert>
    </Snackbar>
  );
}
