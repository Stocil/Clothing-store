// import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "../Header/Header";
import { switchTheme } from "../../store/actions";
import { Box, Button, Paper } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Button variant="contained" onClick={handleThemeSwitch}>
        Сменить тему
      </Button>

      <Box display="flex" gap={5} justifyContent={"center"}>
        <Paper sx={{ width: "500px", height: "500px" }}></Paper>
        <Paper sx={{ width: "500px", height: "500px" }}></Paper>
      </Box>

      <Box mt={5} display="flex" gap={5} justifyContent={"center"}>
        <Paper sx={{ width: "650px", height: "200px" }}></Paper>
        <Paper sx={{ width: "350px", height: "200px" }}></Paper>
      </Box>
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
