import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { Products } from "../../components/Products/Products";
import { useBasket } from "./hooks/useBasket";
import { useDeleteProduct } from "../../hooks/useDeleteProduct";
import { AlertSnackbar } from "../../components/Uikit/AlertSnackbar";
import { Link } from "react-router-dom";

export function Basket() {
  const {
    basketProducts: products,
    totalPrice,
    totalProducts,
    isLogged,

    isAgree,
    handleToggleAgree,

    isBasketSnackOpen,
    handleToggleSnack,
  } = useBasket();
  const { handleDeleteProductFromBasket } = useDeleteProduct({});

  return (
    <Container sx={{ my: 7, pt: 8 }}>
      {products?.length ? (
        <>
          <Typography variant="h2" mb={2}>
            Basket
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            alignItems="start"
            justifyContent="space-between"
          >
            <Paper sx={{ p: 1, width: "100%" }}>
              <Products
                products={products}
                mt={1}
                errorJustify="center"
                direction="column"
                sales={false}
              />
            </Paper>

            <Paper sx={{ p: 3, maxWidth: "350px" }}>
              <Stack spacing={2}>
                <Typography variant="h6" component="p" fontWeight="700">
                  Your basket
                </Typography>

                <Typography variant="p">Products: {totalProducts}</Typography>

                <Typography variant="h4" component="p" fontWeight="700">
                  Total: {totalPrice} $
                </Typography>

                <FormControlLabel
                  label="I agree with the terms of use of the trading platform"
                  control={
                    <Checkbox
                      color="secondary"
                      checked={isAgree}
                      onClick={handleToggleAgree}
                    />
                  }
                />

                <Button
                  sx={{ p: "16px 24px", fontSize: 16, fontWeight: 700 }}
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleToggleSnack();
                    if (isAgree) {
                      handleDeleteProductFromBasket({ all: true });
                    }
                  }}
                >
                  Order
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </>
      ) : (
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
