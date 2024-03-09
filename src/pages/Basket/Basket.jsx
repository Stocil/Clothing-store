import { Box, Container, Paper, Typography } from "@mui/material";

import { Products } from "../../components/Products/Products";
import { useBasket } from "./hooks/useBasket";
import { AlertSnackbar } from "../../components/Uikit/AlertSnackbar";
import { Link } from "react-router-dom";
import { BasketInner, BasketTitle } from "./Basket.styles";
import { BasketTotal } from "../../components/BasketTotal/BasketTotal";

function EmptyBasketContent({ isLogged }) {
  return (
    <Box textAlign="center">
      <Typography variant="h2">The basket is empty</Typography>

      <Typography variant="h6" component="p" mt={2}>
        Use the search to find everything you need
      </Typography>

      {!isLogged ? (
        <Typography variant="h6" component="p" mt={2}>
          If you had products in your shopping cart,
          <Link
            className="header__link"
            to="/sign-in"
            state={{ prevPath: "/basket" }}
          >
            {" log in "}
          </Link>
          to your profile
        </Typography>
      ) : null}
    </Box>
  );
}

export function Basket() {
  const {
    isLogged,
    basketProducts: products,
    totalPrice,
    totalProducts,
    isAgree,
    handleToggleAgree,
    isBasketSnackOpen,
    handleToggleSnack,
    handleBuyProducts,
  } = useBasket();

  return (
    <Container sx={{ my: { xs: 0, sm: 7 }, pt: 8, minHeight: "100vh" }}>
      {products?.length ? (
        <>
          <BasketTitle variant="h2">Basket</BasketTitle>

          <BasketInner>
            <Paper sx={{ p: 1, width: "100%" }}>
              <Products
                products={products}
                mt={1}
                errorJustify="center"
                direction="column"
                sales={false}
              />
            </Paper>

            <BasketTotal
              totalProducts={totalProducts}
              totalPrice={totalPrice}
              isAgree={isAgree}
              onAgree={handleToggleAgree}
              handleBuyProducts={handleBuyProducts}
            />
          </BasketInner>
        </>
      ) : (
        <EmptyBasketContent isLogged={isLogged} />
      )}

      <AlertSnackbar
        open={isBasketSnackOpen}
        handleClose={handleToggleSnack}
        error={!isAgree}
      >
        {isAgree
          ? "The products were purchased"
          : "You must accept the agreement"}
      </AlertSnackbar>
    </Container>
  );
}
