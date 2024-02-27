import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  ProductCardButton,
  ProductCategoryLabel,
  ProductImageInner,
  ProductInfoInner,
  ProductItemInner,
  ProductLastSectionInner,
  ProductPriceText,
  ProductsLabelsInner,
  ProductsTitleText,
} from "./ProductsList.styles";
import { SalePriceText } from "../Uikit/SalePriceText";
import { useAddProduct } from "../../hooks/useAddProduct.jsx";
import { AlertSnackbar } from "../Uikit/AlertSnackbar.jsx";
import { useDeleteProduct } from "../../hooks/useDeleteProduct.jsx";
import { LoadingProduct } from "../Uikit/LoadingProduct.jsx";
import { BasketCountManager } from "../BasketInputs/BasketInputs.jsx";

export function ProductsList({ product, direction, favourite, isLoading }) {
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

  if (isLoading) {
    return <LoadingProduct />;
  }

  return (
    <Grid item xs={1} display={direction === "row" ? "flex" : null}>
      <ProductItemInner
        variant="outlined"
        sx={{ flexDirection: direction === "row" ? "column" : "row" }}
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

          <ProductsLabelsInner>
            <ProductCategoryLabel>{product.category.name}</ProductCategoryLabel>

            {product.size ? (
              <ProductCategoryLabel bgcolor="main-dark">
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
          </ProductsLabelsInner>

          <Stack>
            <ProductPriceText>Price</ProductPriceText>

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
              <BasketCountManager
                product={product}
                count={count}
                setCount={setCount}
                handleAddProductCount={handleAddProductCount}
                handleDeleteProductFromBasket={handleDeleteProductFromBasket}
              />
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
