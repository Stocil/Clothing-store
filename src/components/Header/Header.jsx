import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {
  Badge,
  Button,
  Container,
  Hidden,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  HeaderColoredTitle,
  HeaderIconsInner,
  HeaderImageInner,
  HeaderInner,
  HeaderTitleInner,
} from "./Header.styles";
import { useHeader } from "./hooks/useHeader";
import { SearchBar } from "../SearchBar/SearchBar";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { HeaderBurger } from "../HeaderBurger/HeaderBurger";

export function Header() {
  const {
    user,
    userBasketSize,
    location,
    theme,
    handleLogOut,
    handleSwitchTheme,
    menuOpen,
    handleToggleMenu,
  } = useHeader();

  return (
    <AppBar sx={{ bgcolor: "transparent", backdropFilter: "blur(5px)" }}>
      <Container sx={{ px: { xs: 0, ss: 2, sm: 3 } }}>
        <Toolbar disableGutters>
          <Hidden mdUp>
            <IconButton size="large" color="inherit" onClick={handleToggleMenu}>
              <MenuIcon />
            </IconButton>
          </Hidden>

          <HeaderInner>
            <Link to="/">
              <HeaderTitleInner display={{ xs: "none", md: "block" }}>
                Spark
                <HeaderColoredTitle>{" store"}</HeaderColoredTitle>
              </HeaderTitleInner>
            </Link>

            <SearchBar />

            <Stack
              direction="row"
              spacing={{ xs: 1, big: 5 }}
              alignItems={"center"}
            >
              <HeaderIconsInner display={{ xs: "none", md: "flex" }}>
                <Link to="/favorite">
                  <FavoriteBorderIcon />
                </Link>

                <Link to="/basket">
                  <Badge badgeContent={userBasketSize} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
                </Link>

                <ThemeSwitch onSwitch={handleSwitchTheme} theme={theme} />
              </HeaderIconsInner>

              {user.name ? (
                <Stack direction="row" alignItems="center" gap={1}>
                  <Link to="/userpage">
                    <HeaderImageInner>
                      <img
                        className="header__avatar"
                        src={
                          user.avatarUrl
                            ? user.avatarUrl
                            : "/React-store/assets/defAvatar.svg"
                        }
                        alt="avatar"
                      />

                      <Typography
                        width={1}
                        display={{ xs: "none", big: "block" }}
                      >
                        {user.name}
                      </Typography>
                    </HeaderImageInner>
                  </Link>

                  <IconButton
                    onClick={() => handleLogOut()}
                    sx={{ display: { xs: "none", md: "flex" } }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Stack>
              ) : (
                <Link
                  to="/sign-in"
                  replace
                  state={{ prevPath: location.pathname }}
                >
                  <Button
                    variant="contained"
                    sx={{ px: { xs: "10px", ss: "16px" } }}
                  >
                    Log in
                  </Button>
                </Link>
              )}
            </Stack>
          </HeaderInner>
        </Toolbar>
      </Container>

      <HeaderBurger
        menuOpen={menuOpen}
        theme={theme}
        userBasketSize={userBasketSize}
        handleToggleMenu={handleToggleMenu}
        handleSwitchTheme={handleSwitchTheme}
      />
    </AppBar>
  );
}
