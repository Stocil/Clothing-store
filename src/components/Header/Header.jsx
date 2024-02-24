import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LogoutIcon from "@mui/icons-material/Logout";

import { SearchBar } from "./Header.styles";
import { useHeader } from "./hooks/useHeader";

export function Header() {
  const {
    user,
    userBasketSize,
    searchOpen,
    searchValue,

    location,
    searchProducts,
    searchProductsIsLoading,

    handleLogOut,
    setSearchParams,
    setSearchOpen,
  } = useHeader();

  return (
    <AppBar sx={{ bgcolor: "transparent", backdropFilter: "blur(5px)" }}>
      <Container>
        <Toolbar disableGutters>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center "}
            width={1}
          >
            <Link to="/">
              <Box fontWeight="700" fontSize="40px">
                Spark
                <Box
                  display="inline"
                  sx={{ color: (theme) => theme.palette.primary.dark }}
                >
                  {" store"}
                </Box>
              </Box>
            </Link>

            <Box position="relative">
              <SearchBar
                value={searchValue}
                onChange={setSearchParams}
                toggleOpenSearchRes={setSearchOpen}
              />

              {searchOpen ? (
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",

                    position: "absolute",
                    ml: "5px",
                    bgcolor: "main",
                    p: "10px",
                  }}
                >
                  {searchProducts.length > 0 && !searchProductsIsLoading ? (
                    searchProducts.map((product) => {
                      return (
                        <Paper
                          variant="outlined"
                          sx={{ p: 1, display: "flex", gap: 1, width: 1 }}
                          key={product.id}
                        >
                          <Link to={`/product/${product.id}`}>
                            <img
                              className="header__search-image"
                              src={
                                product.images[0].startsWith("https")
                                  ? product.images[0]
                                  : "https://uhdpapers.com/wp-content/uploads/2018/01/blur1-1024x576.png"
                              }
                            />
                          </Link>

                          <Typography variant="p" maxWidth="60%">
                            {product.title}
                          </Typography>
                        </Paper>
                      );
                    })
                  ) : (
                    <Typography
                      variant="h5"
                      component="p"
                      fontWeight="700"
                      width="250px"
                    >
                      {searchProductsIsLoading ? "Loading..." : "No results"}
                    </Typography>
                  )}
                </Paper>
              ) : null}
            </Box>

            <Stack direction="row" spacing={5} alignItems={"center"}>
              <Stack direction="row" spacing={2}>
                <Link to="/favorite">
                  <FavoriteBorderIcon />
                </Link>

                <Link to="/basket">
                  <Badge badgeContent={userBasketSize} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
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
}
