import { Routes, Route } from "react-router-dom";

import { Header } from "../Header/Header";
import { Homepage } from "../../pages/Homepage";
import { Basket } from "../../pages/Basket";
import { Favorite } from "../../pages/Favorite";
import { UserPage } from "../../pages/UserPage/UserPage";
import { Box } from "@mui/material";
import { AccountManager } from "../../pages/AccountManager/AccountManager";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Header />

      <Box component={"main"}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorite" element={<Favorite />} />

          <Route
            path="/userpage"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/sign-in"
            element={
              <PrivateRoute>
                <AccountManager />
              </PrivateRoute>
            }
          />

          <Route
            path="/sign-up"
            element={
              <PrivateRoute>
                <AccountManager />
              </PrivateRoute>
            }
          />

          {/* <Route path="/users" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="admin" element={<AdminUser />} />
          <Route path="not-found" element={<UserNotFound />} />
        </Route> */}

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>

        <div id="modals"></div>
      </Box>
    </>
  );
}

export default App;
