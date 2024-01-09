import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function AccountManager() {
  const path = useLocation().pathname;
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Container component={"section"} sx={{ my: 12 }}>
      <Stack alignItems={"center"}>
        <Paper sx={{ py: 6, px: 4, width: "450px" }}>
          <Typography variant="h4" component={"h2"} textAlign={"center"}>
            Sign in
          </Typography>

          <form autoComplete="off" className="form">
            <TextField
              name="userName"
              id="username"
              label="Username"
              variant="outlined"
              color="secondary"
              fullWidth
            />

            <TextField
              name="email"
              id="email"
              label="Email"
              variant="outlined"
              color="secondary"
              fullWidth
            />

            <FormControl sx={{ width: 1 }} variant="outlined">
              <InputLabel color="secondary" htmlFor="password">
                Password
              </InputLabel>
              <OutlinedInput
                name="password"
                id="password"
                label="Password"
                color="secondary"
                type={isShowPassword ? "text" : "password"}
                fullWidth
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setIsShowPassword((show) => !show)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {isShowPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button variant="contained" size="large" type="submit">
              Login
            </Button>

            <Stack direction={"row"}>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Already have an account?
                <Link className="form__link" to={"/sign-in"}>
                  Sign-in
                </Link>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Container>
  );
}
