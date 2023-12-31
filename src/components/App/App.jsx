import {
  Routes,
  Route,
  Link,
  useResolvedPath,
  useMatch,
  NavLink,
} from "react-router-dom";
import { Homepage } from "../../pages/Homepage";
import { Score } from "../../pages/Score";
import { Users } from "../../pages/Users/Users";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { User } from "../../pages/User/User";
import { AdminUser } from "../../pages/AdminUser";
import { UsersLayout } from "../../pages/UsersLayout";

function App() {
  return (
    <div>
      <header className="header">
        <CustomLink to="/" className="header__link">
          Home
        </CustomLink>
        <CustomLink to="/score" className="header__link">
          Score
        </CustomLink>
        <CustomLink to="/users" className="header__link">
          Users
        </CustomLink>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/score" element={<Score />} />

        <Route path="/users" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="admin" element={<AdminUser />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CustomLink({ to, children }) {
  // Add active class depends on where you locate, same as NavLink

  // const resolvedPath = useResolvedPath(to);
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  // const className = isActive ? "header__link active" : "header__link";

  return (
    <li>
      <NavLink className="header__link" to={to}>
        {children}
      </NavLink>
    </li>
  );
}

export default App;
