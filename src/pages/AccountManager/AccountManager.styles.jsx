import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
  styled,
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
        autoComplete="off"
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

export const FieldWrapper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "80%",
    padding: theme.spacing(3, 2),
  },

  [theme.breakpoints.up("sm")]: {
    width: "450px",
    padding: theme.spacing(4),
  },
}));

export const AuthTipInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
  marginTop: theme.spacing(2),
}));

export const AuthTip = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("xs")]: {
    gap: "10px",
    flexDirection: "column",
  },

  [theme.breakpoints.up("sm")]: {
    gap: "5px",
    flexDirection: "row",
  },
}));
