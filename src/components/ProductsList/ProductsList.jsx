import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  ProductBasketAmountInput,
  ProductCardButton,
  ProductCategoryLabel,
  ProductImageInner,
  ProductInfoInner,
  ProductItemInner,
  ProductLastSectionInner,
  ProductsTitleText,
} from "./ProductsList.styles";
import { SalePriceText } from "../Uikit/SalePriceText";
import { useAddProduct } from "../../hooks/useAddProduct.jsx";
import { AlertSnackbar } from "../Uikit/AlertSnackbar.jsx";
import { useDeleteProduct } from "../../hooks/useDeleteProduct.jsx";

export function ProductsList({ product, direction, favourite }) {
  const [count, setCount] = useState(product.count);
  const notInBasket = useLocation().pathname.substr(1) !== "basket";

  const { handleDeleteProductFromBasket, handleDeleteProductFromFavourite } =
    useDeleteProduct({
      productId: product.id,
      selectSize: product.size,
    });

  const {
    handleAddToBasket: handleAddProductCount,
    handleToggleSnack,
    snackOpen,
  } = useAddProduct({
    product,
    newPrice: product.newPrice ? product.newPrice + "$" : null,
    selectSize: product.size,
  });

  return (
    <Grid item xs={1} display={direction === "row" ? "flex" : null}>
      <ProductItemInner
        variant="outlined"
        sx={{
          flexDirection: direction === "row" ? "column" : "row",
          position: "relative",
        }}
      >
        <ProductImageInner>
          <Link
            to={`/product/${product.id}`}
            state={
              product.sale
                ? {
                    newPrice: product.newPrice + "$",
                  }
                : null
            }
          >
            <img
              data-size={direction === "row" ? "large" : "small"}
              className="product__image"
              src={
                product.images[0].startsWith("https")
                  ? product.images[0]
                  : "https://uhdpapers.com/wp-content/uploads/2018/01/blur1-1024x576.png"
              }
            />
          </Link>
        </ProductImageInner>

        <ProductInfoInner
          justifyContent={direction === "row" ? "space-between" : "start"}
        >
          <ProductLastSectionInner>
            <ProductsTitleText
              fontSize={direction === "row" ? "16px" : "22px"}
              maxWidth={direction === "row" ? "250px" : null}
            >
              {product.title}
            </ProductsTitleText>

            {direction === "row" ? (
              <ProductCardButton onClick={handleAddProductCount} />
            ) : null}
          </ProductLastSectionInner>

          <Stack direction="row" spacing={1}>
            <ProductCategoryLabel>{product.category.name}</ProductCategoryLabel>

            {product.size ? (
              <ProductCategoryLabel
                bgcolor={(theme) => theme.palette.primary.dark}
              >
                {product.size}
              </ProductCategoryLabel>
            ) : null}

            {favourite ? (
              <IconButton
                size="small"
                onClick={handleDeleteProductFromFavourite}
              >
                <FavoriteIcon color="secondary" fontSize="large" />
              </IconButton>
            ) : null}
          </Stack>

          <Stack>
            <Typography fontSize="12px" sx={{ opacity: 0.6 }}>
              Price
            </Typography>

            <Stack direction="row" spacing={1}>
              {product.sale && !product.finalPrice ? (
                <Typography variant="h6" component="p" fontWeight={700}>
                  ${product.newPrice}
                </Typography>
              ) : null}

              <SalePriceText isSale={product.sale && !product.finalPrice}>
                $
                {product.finalPrice
                  ? product.finalPrice * product.count || product.finalPrice
                  : product.price}
              </SalePriceText>
            </Stack>

            {product.count ? (
              <Stack direction="row" alignItems="end" gap="20px">
                <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                  <Button
                    size="small"
                    sx={{ py: "10px" }}
                    disabled={product.count === 1}
                    onClick={() => {
                      setCount((current) => current - 1);
                      handleAddProductCount({ amount: product.count - 1 });
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>

                  <ProductBasketAmountInput
                    count={count}
                    setCount={setCount}
                    onChange={handleAddProductCount}
                  />

                  <Button
                    size="small"
                    sx={{ py: "10px" }}
                    onClick={() => {
                      setCount((current) => current + 1);
                      handleAddProductCount({});
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </Stack>

                <IconButton
                  size="small"
                  onClick={handleDeleteProductFromBasket}
                >
                  <DeleteIcon color="error" fontSize="large" />
                </IconButton>
              </Stack>
            ) : null}
          </Stack>
        </ProductInfoInner>
      </ProductItemInner>

      <AlertSnackbar
        open={notInBasket ? snackOpen : false}
        handleClose={handleToggleSnack}
      >
        The product has been added
      </AlertSnackbar>
    </Grid>
  );
}
