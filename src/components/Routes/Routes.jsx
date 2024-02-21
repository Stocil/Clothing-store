import { Routes, Route } from "react-router-dom";

import { AccountManager } from "../../pages/AccountManager/AccountManager";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { HomepageLayout } from "../HomepageLayout/HomepageLayout";
import { Basket } from "../../pages/Basket/Basket";
import { Homepage } from "../../pages/Homepage/Homepage";
import { Favorite } from "../../pages/Favorite/Favorite";
import { UserPage } from "../../pages/UserPage/UserPage";
import { Category } from "../../pages/Category/Category";
import { Product } from "../../pages/Product/Product";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/basket" element={<Basket />} />
      <Route path="*" element={<ErrorPage />} />

      <Route path="/" element={<HomepageLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/categories/:id" element={<Category />} />
      </Route>

      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      />

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
