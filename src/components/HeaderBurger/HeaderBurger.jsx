import {
  Badge,
  IconButton,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";

import { HeaderColoredTitle, HeaderTitleInner } from "../Header/Header.styles";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { HeaderBurgerInner } from "./HeaderBurger.styles";

export function HeaderBurger({
  menuOpen,
  theme,
  userBasketSize,
  handleToggleMenu,
  handleSwitchTheme,
}) {
  return (
    <SwipeableDrawer
      anchor={"left"}
      open={menuOpen}
      onClose={handleToggleMenu}
      onOpen={handleToggleMenu}
      sx={{ position: "relative" }}
    >
      <HeaderBurgerInner>
        <HeaderTitleInner>
          Spark
          <HeaderColoredTitle>{" store"}</HeaderColoredTitle>
        </HeaderTitleInner>

        <Stack spacing={5}>
          <Link
            to="/"
            className="header-burger__link"
            onClick={handleToggleMenu}
          >
            <HomeIcon />

            <Typography variant="h4" component="p">
              Homepage
            </Typography>
          </Link>

          <Link
            to="/categories/0"
            className="header-burger__link"
            onClick={handleToggleMenu}
          >
            <CategoryIcon />

            <Typography variant="h4" component="p">
              Categories
            </Typography>
          </Link>

          <Link
            to="/favorite"
            className="header-burger__link"
            onClick={handleToggleMenu}
          >
            <FavoriteIcon />

            <Typography variant="h4" component="p">
              Favorite
            </Typography>
          </Link>

          <Link
            to="/basket"
            className="header-burger__link"
            onClick={handleToggleMenu}
          >
            <Badge badgeContent={userBasketSize} color="secondary">
              <ShoppingBasketIcon />
            </Badge>

            <Typography variant="h4" component="p">
              Basket
            </Typography>
          </Link>

          <Link
            to="/userpage"
            className="header-burger__link"
            onClick={handleToggleMenu}
          >
            <AccountCircleIcon />

            <Typography variant="h4" component="p">
              Profile
            </Typography>
          </Link>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4" component="p">
              Theme
            </Typography>

            <ThemeSwitch onSwitch={handleSwitchTheme} theme={theme} />
          </Stack>
        </Stack>
      </HeaderBurgerInner>

      <IconButton
        sx={{ position: "absolute", top: 10, right: 10 }}
        onClick={handleToggleMenu}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
    </SwipeableDrawer>
  );
}
