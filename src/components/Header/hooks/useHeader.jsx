import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { logoutUser, switchTheme } from "../../../store/actions";
import { useState } from "react";

export function useHeader() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.currentUser);
  const theme = useSelector((state) => state.theme);

  let userBasketSize = 0;
  user.basket?.map((product) => {
    userBasketSize += product.count;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen((current) => !current);
  }

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }

  function handleSwitchTheme() {
    dispatch(switchTheme());
  }

  return {
    user,
    userBasketSize,
    location,
    theme,
    handleLogOut,
    handleSwitchTheme,
    menuOpen,
    handleToggleMenu,
  };
}
