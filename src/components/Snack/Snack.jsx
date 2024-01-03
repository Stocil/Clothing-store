import { Alert, Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export function Snack({ isOpen, handleCloseSnack }) {
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleCloseSnack}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Пользователь добавлен!
      </Alert>
    </Snackbar>
  );
}
