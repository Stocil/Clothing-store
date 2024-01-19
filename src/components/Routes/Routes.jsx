import { Routes, Route } from "react-router-dom";

import { AccountManager } from "../../pages/AccountManager/AccountManager";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { Homepage } from "../../pages/Homepage/Homepage";
import { Basket } from "../../pages/Basket";
import { Favorite } from "../../pages/Favorite";
import { UserPage } from "../../pages/UserPage/UserPage";
import { Category } from "../Category/Category";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/categories/:id" element={<Category />} />

      <Route
        path="/favorite"
        element={
          <PrivateRoute>
            <Favorite />
          </PrivateRoute>
        }
      />

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
    </Routes>
  );
}

{
  /* <Route path="/users" element={<UsersLayout />}>
            <Route index element={<Users />} />
            <Route path=":id" element={<User />} />
            <Route path="admin" element={<AdminUser />} />
            <Route path="not-found" element={<UserNotFound />} />
          </Route> */
}

{
  /* <Route path="*" element={<NotFoundPage />} /> */
}