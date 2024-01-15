import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

export function UiPasswordButton({
  helperText = null,
  isShowPassword,
  handleShowPassword,
  fieldName,
  label,
  id,
}) {
  let isError = helperText ? true : false;

  return (
    <FormControl sx={{ width: 1 }} variant="outlined">
      <InputLabel color={isError ? "error" : "secondary"} htmlFor={id}>
        {label}
      </InputLabel>

      <OutlinedInput
        required
        error={isError}
        name={fieldName}
        id={id}
        label={label}
        color="secondary"
        type={isShowPassword ? "text" : "password"}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
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
