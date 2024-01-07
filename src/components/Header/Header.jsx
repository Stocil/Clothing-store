import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Container, Stack, Toolbar, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { SearchBar } from "./Header.styles";

export function Header() {
  const avatarSrc = "../../assets/defAvatar.svg";

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack direction={"row"} justifyContent={"space-between"} width={1}>
            <Link to="/">
              <img src="../../assets/Logo.svg" alt="logo" />
            </Link>

            <SearchBar />

            <Stack direction="row" spacing={5} alignItems={"center"}>
              <Stack direction="row" spacing={2}>
                <Link to="/favorite">
                  <FavoriteBorderIcon fontSize="medium" />
                </Link>

                <Link to="/basket">
                  <ShoppingBasketIcon fontSize="medium" />
                </Link>
              </Stack>

              <Link to="/userpage">
                <Stack direction="row" spacing={1} alignItems={"center"}>
                  <img
                    className="header__avatar"
                    src={avatarSrc}
                    alt="avatar"
                  />

                  <Typography width={1}>Stas Vashurov</Typography>
                </Stack>
              </Link>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
