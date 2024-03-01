import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {
  Badge,
  Box,
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

import { HeaderColoredTitle, HeaderInner } from "./Header.styles";
import { useHeader } from "./hooks/useHeader";
import { SearchBar } from "../SearchBar/SearchBar";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

export function Header() {
  const {
    user,
    userBasketSize,
    location,
    theme,
    handleLogOut,
    handleSwitchTheme,
  } = useHeader();

  return (
    <AppBar sx={{ bgcolor: "transparent", backdropFilter: "blur(5px)" }}>
      <Container>
        <Toolbar disableGutters>
          <HeaderInner>
            <Link to="/">
              <Box fontWeight="700" fontSize="40px">
                Spark
                <HeaderColoredTitle>{" store"}</HeaderColoredTitle>
              </Box>
            </Link>

            <SearchBar />

            <Stack direction="row" spacing={5} alignItems={"center"}>
              <Stack direction="row" alignItems="center" spacing={3}>
                <Link to="/favorite">
                  <FavoriteBorderIcon />
                </Link>

                <Link to="/basket">
                  <Badge badgeContent={userBasketSize} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
                </Link>

                <ThemeSwitch onSwitch={handleSwitchTheme} theme={theme} />
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
          </HeaderInner>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
