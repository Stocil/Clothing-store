import { Routes, Route } from "react-router-dom";
import { Homepage } from "../../pages/Homepage";
import { Score } from "../../pages/Score";
import { Users } from "../../pages/Users";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { User } from "../../pages/User/User";
import { AdminUser } from "../../pages/AdminUser";
import { UsersLayout } from "../../pages/UsersLayout";
import { UserNotFound } from "../../pages/UserNotFound";
import { Header } from "../Header/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/score" element={<Score />} />

        <Route path="/users" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="admin" element={<AdminUser />} />
          <Route path="not-found" element={<UserNotFound />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
