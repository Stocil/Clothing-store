import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LogoutIcon from "@mui/icons-material/Logout";

import { SearchBar } from "./Header.styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions";

export function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.currentUser);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center "}
            width={1}
          >
            <Link to="/">
              <img src="../../assets/Logo.svg" alt="logo" />
            </Link>

            <SearchBar />

            <Stack direction="row" spacing={5} alignItems={"center"}>
              <Stack direction="row" spacing={2}>
                <Link to="/favorite">
                  <FavoriteBorderIcon />
                </Link>

                <Link to="/basket">
                  <ShoppingBasketIcon />
                </Link>
              </Stack>

              {user.name ? (
                <Stack direction="row" alignItems="center" gap={1}>
                  <Link to="/userpage">
                    <Stack direction="row" spacing={1} alignItems={"center"}>
                      <img
                        className="header__avatar"
                        src={
                          user.avatarUrl
                            ? user.avatarUrl
                            : "../../assets/defAvatar.svg"
                        }
                        alt="avatar"
                      />

                      <Typography width={1}>{user.name}</Typography>
                    </Stack>
                  </Link>

                  <IconButton onClick={() => handleLogOut()}>
                    <LogoutIcon />
                  </IconButton>
                </Stack>
              ) : (
                <Link
                  to="/sign-in"
                  replace
                  state={{ prevPath: location.pathname }}
                >
                  <Button variant="contained" sx={{ textTransform: "none" }}>
                    Log in
                  </Button>
                </Link>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }
}
