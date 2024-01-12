import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

export function SubmitButton({ children }) {
  return (
    <Button
      variant="contained"
      size="large"
      type="submit"
      sx={{ textTransform: "none" }}
    >
      {children}
    </Button>
  );
}

export function PasswordField({
  helperText,
  field,
  isShowPassword,
  onClick,
  path,
}) {
  let isError = helperText ? true : false;

  if (path === "/sign-in") isError = false;

  return (
    <FormControl sx={{ width: 1 }} variant="outlined">
      <InputLabel color={isError ? "error" : "secondary"} htmlFor="password">
        {field.label}
      </InputLabel>

      <OutlinedInput
        required
        error={isError}
        name={field.name}
        id={field.id}
        label={field.label}
        color="secondary"
        type={isShowPassword ? "text" : "password"}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {isShowPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      {isError ? (
        <Typography variant="body2" color="error">
          {helperText}
        </Typography>
      ) : null}
    </FormControl>
  );
}
