import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { logoutUser, switchTheme } from "../../../store/actions";

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

  function handleSwitchTheme() {
    dispatch(switchTheme());
  }

  return { user, userBasketSize, location, handleLogOut, handleSwitchTheme };
}
