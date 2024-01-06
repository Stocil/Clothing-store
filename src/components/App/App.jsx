// import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "../Header/Header";
import { switchTheme } from "../../store/actions";
import { Box, Button, Container, Paper } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />

      <Container maxWidth="lg">
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

      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/score" element={<Score />} />

        <Route path="/users" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="admin" element={<AdminUser />} />
          <Route path="not-found" element={<UserNotFound />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
    </>
  );

  function handleThemeSwitch() {
    dispatch(switchTheme());
  }
}

export default App;
