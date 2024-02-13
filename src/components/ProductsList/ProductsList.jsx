import { Link } from "react-router-dom";
import {
  ProductCardButton,
  ProductCategoryLabel,
  ProductImageInner,
  ProductInfoInner,
  ProductItemInner,
  ProductLastSectionInner,
  ProductsTitleText,
} from "./ProductsList.styles";
import { Grid, Stack, Typography } from "@mui/material";
import { SalePriceText } from "../Uikit/SalePriceText";

export function ProductsList({ product }) {
  return (
    <Grid item xs={1} display="flex">
      <ProductItemInner variant="outlined">
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
            <img className="product__image" src={product.images[0]} />
          </Link>
        </ProductImageInner>

        <ProductInfoInner>
          <ProductLastSectionInner>
            <ProductsTitleText>{product.title}</ProductsTitleText>

            <ProductCardButton onClick={() => console.log("Add to card")} />
          </ProductLastSectionInner>

          <ProductCategoryLabel>{product.category.name}</ProductCategoryLabel>

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
                ${product.price}
              </SalePriceText>
            </Stack>
          </Stack>
        </ProductInfoInner>
      </ProductItemInner>
    </Grid>
  );
}

// function addToCard(product) {
//   return {};
// }
