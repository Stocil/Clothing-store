import { Routes, Route } from "react-router-dom";

import { Header } from "../Header/Header";
import { Homepage } from "../../pages/Homepage";
import { Basket } from "../../pages/Basket";
import { Favorite } from "../../pages/Favorite";
import { UserPage } from "../../pages/UserPage";
import { Box } from "@mui/material";
import { AccountManager } from "../../pages/AccountManager";

function App() {
  return (
    <>
      <Header />

      <Box component={"main"}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/sign-in" element={<AccountManager />} />

          {/* <Route path="/users" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="admin" element={<AdminUser />} />
          <Route path="not-found" element={<UserNotFound />} />
        </Route> */}

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Box>
    </>
  );
}

export default App;
