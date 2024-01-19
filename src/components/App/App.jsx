import { Box } from "@mui/material";

import { Header } from "../Header/Header";
import { AppRoutes } from "../Routes/Routes";
import { Categories } from "../../components/Categories/Categories";

function App() {
  return (
    <>
      <Header />

      <Box component="main">
        <Categories />
        <AppRoutes />
      </Box>
    </>
  );
}

export default App;
