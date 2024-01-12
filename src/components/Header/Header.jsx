import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { SearchBar } from "./Header.styles";
import { useSelector } from "react-redux";

export function Header() {
  const location = useLocation();
  const user = useSelector((state) => state.currentUser);
  // const user = {
  //   name: "Stas",
  //   avatarUrl: "../../assets/defAvatar.svg",
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
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
}
