import { Container, Grid, Typography } from "@mui/material";

import { ErrorMessage } from "../Uikit/ErrorMessage";
import { getSale } from "../../utils/getSale.js";
import { ProductsList } from "../ProductsList/ProductsList.jsx";
import { LoadingProduct } from "../Uikit/LoadingProduct.jsx";

export function Products({
  products = [],
  isError = false,
  isLoading = false,
  maxProduct = null,
  title = null,
  mt = 7,
  errorJustify = null,
  direction = "row",
  sales = true,
  favourite = false,
}) {
  const sortedProducts = products
    .map((product, index) => {
      if (maxProduct && index >= maxProduct) {
        return null;
      }

      return product;
    })
    .filter((product) => product);

  const sortedProductsWithSales = sales
    ? getSale(sortedProducts)
    : sortedProducts;

  const productsList = sortedProductsWithSales.map((product) => {
    if (product.title?.length > 29) {
      product.title = product.title.substr(0, 26) + "...";
    }

    return (
      <ProductsList
        key={product.size ? product.size + product.id : product.id}
        product={product}
        direction={direction}
        favourite={favourite}
        isLoading={isLoading}
      />
    );
  });

  const renderContent = () => {
    let content;

    if (isError) {
      content = (
        <ErrorMessage variant="h4" m={errorJustify ? "40px auto" : "40px 0"}>
          {isError}
        </ErrorMessage>
      );
    } else if (productsList.length === 0 && !isLoading) {
      content = (
        <ErrorMessage variant="h4" m={errorJustify ? "40px auto" : "40px 0"}>
          There are no products
        </ErrorMessage>
      );
    } else {
      content =
        productsList.length === 0 ? <LoadingProduct count={3} /> : productsList;
    }

    return (
      <>
        {title ? (
          <Typography fontWeight="700" variant="h3" py={2} textAlign="center">
            {title}
          </Typography>
        ) : null}

        <Grid container spacing={5} columns={direction === "row" ? 3 : 1}>
          {content}
        </Grid>
      </>
    );
  };

  return (
    <Container component="div" maxWidth="lg" sx={{ mt: mt, mb: 2 }}>
      {renderContent()}
    </Container>
  );
}
