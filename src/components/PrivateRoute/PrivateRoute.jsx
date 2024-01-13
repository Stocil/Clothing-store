import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ children }) {
  const user = useSelector((state) => state.currentUser)?.name;
  const path = useLocation().pathname;
  const prevPath = useLocation().state?.prevPath || "/";

  console.log(prevPath);

  if (path === "/sign-in" || path === "/sign-up") {
    if (user) {
      return <Navigate to={"/userpage"} />;
    }

    return children;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/sign-in"} state={{ prevPath: path }} />;
}
