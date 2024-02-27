import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { logoutUser } from "../../../store/actions";

export function useHeader() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.currentUser);

  let userBasketSize = 0;
  user.basket?.map((product) => {
    userBasketSize += product.count;
  });

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }

  return { user, userBasketSize, location, handleLogOut };
}
