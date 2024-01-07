import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { switchTheme } from "../store/actions";

export function Homepage() {
  const dispatch = useDispatch();

  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h3">Welcome to Homepage</Typography>

        <Button variant="contained" onClick={handleThemeSwitch}>
          Сменить тему
        </Button>

        <Box display="flex" gap={5} justifyContent={"space-between"}>
          <Paper sx={{ width: "600px", height: "500px" }}></Paper>
          <Paper sx={{ width: "550px", height: "500px" }}></Paper>
        </Box>

        <Box mt={5} display="flex" gap={5} justifyContent={"space-between"}>
          <Paper sx={{ width: "650px", height: "200px" }}></Paper>
          <Paper sx={{ width: "450px", height: "200px" }}></Paper>
        </Box>
      </Container>
    </Box>
  );

  function handleThemeSwitch() {
    dispatch(switchTheme());
  }
}
