import { Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  ProductCardButton,
  ProductImageInner,
  ProductInfoInner,
  ProductItemInner,
  ProductLastSectionInner,
} from "./Products.styles";
import { ErrorMessage } from "../Uikit/ErrorMessage";
import { getSale } from "../../utils/getSale";
import { SalePriceText } from "../Uikit/SalePriceText";

export function Products({
  products = [],
  isError = false,
  isLoading = false,
  maxProduct = null,
  title = null,
}) {
  const sortedProducts = products
    .map((product, index) => {
      if (maxProduct && index >= maxProduct) {
        return null;
      }

      if (
        !product.images[0] ||
        !product.images[0].startsWith("https") ||
        !product.price ||
        !product.title
      )
        return null;

      return product;
    })
    .filter((product) => product);

  const sortedProductsWithSales = getSale(sortedProducts);

  const productsList = sortedProductsWithSales.map((product) => {
    return (
      <Grid key={product.id} item xs={1} display="flex">
        <ProductItemInner>
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

            <ProductLastSectionInner>
              <Typography component="p">{product.title}</Typography>

              <ProductCardButton onClick={() => console.log("Add to card")} />
            </ProductLastSectionInner>
          </ProductInfoInner>
        </ProductItemInner>
      </Grid>
    );
  });

  const renderContent = () => {
    let content;

    if (isError) {
      content = (
        <ErrorMessage variant="h4" mt={5} ml={5}>
          {isError}
        </ErrorMessage>
      );
    } else if (productsList.length === 0) {
      content = (
        <ErrorMessage variant="h4" mt={5} ml={5}>
          There are no products in this Category
        </ErrorMessage>
      );
    } else {
      content = productsList;
    }

    return (
      <>
        {title ? <Typography variant="h3">{title}</Typography> : null}

        <Grid container spacing={5} columns={3}>
          {content}
        </Grid>
      </>
    );
  };

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      {isLoading ? (
        <Typography variant="h4" fontWeight={700}>
          Loading...
        </Typography>
      ) : (
        renderContent()
      )}
    </Container>
  );
}
