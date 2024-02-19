import { Link } from "react-router-dom";
import { Button, Grid, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

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
import { useState } from "react";

export function ProductsList({ product, direction }) {
  // const [productCount, setProductCount] = useState(product.count);

  const { handleAddToBasket: handleAddProductCount } = useAddProduct({
    product,
    selectSize: product.size,
  });

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

            {direction === "row" ? <ProductCardButton /> : null}
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
          </Stack>

          <Stack>
            <Typography fontSize="12px" sx={{ opacity: 0.6 }}>
              Price
            </Typography>

            <Stack direction="row" spacing={1}>
              {product.sale ? (
                <Typography variant="h6" component="p" fontWeight={700}>
                  ${product.newPrice}
                </Typography>
              ) : null}

              <SalePriceText isSale={product.sale}>
                $
                {product.finalPrice
                  ? product.finalPrice * product.count
                  : product.price}
              </SalePriceText>
            </Stack>

            {product.count ? (
              <Stack direction="row" alignItems="center" spacing={1} mt={2}>
                <Button
                  size="small"
                  sx={{ py: "10px" }}
                  disabled={product.count === 1}
                >
                  <RemoveIcon fontSize="small" />
                </Button>

                <ProductBasketAmountInput
                  // count={productCount}
                  count={product.count}
                  onChange={handleAddProductCount}
                />

                <Button
                  size="small"
                  sx={{ py: "10px" }}
                  onClick={() => {
                    handleAddProductCount({});
                    // setProductCount((count) => count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </Stack>
            ) : null}
          </Stack>
        </ProductInfoInner>
      </ProductItemInner>
    </Grid>
  );
}
