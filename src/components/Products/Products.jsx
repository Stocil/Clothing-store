import { Container, Grid, Typography } from "@mui/material";

import { ErrorMessage } from "../Uikit/ErrorMessage";
import { getSale } from "../../utils/getSale.js";
import { ProductsList } from "../ProductsList/ProductsList.jsx";

export function Products({
  products = [],
  isError = false,
  isLoading = false,
  maxProduct = null,
  title = null,
  mt = 7,
  errorJustify = null,
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
    if (product.title?.length > 29) {
      product.title = product.title.substr(0, 26) + "...";
    }

    return <ProductsList key={product.id} product={product} />;
  });

  const renderContent = () => {
    let content;

    if (isError) {
      content = (
        <ErrorMessage variant="h4" m={errorJustify ? "40px auto" : "40px 0"}>
          {isError}
        </ErrorMessage>
      );
    } else if (productsList.length === 0) {
      content = (
        <ErrorMessage variant="h4" m={errorJustify ? "40px auto" : "40px 0"}>
          There are no products
        </ErrorMessage>
      );
    } else {
      content = productsList;
    }

    return (
      <>
        {title ? (
          <Typography fontWeight="700" variant="h3" py={2} textAlign="center">
            {title}
          </Typography>
        ) : null}

        <Grid container spacing={5} columns={3}>
          {content}
        </Grid>
      </>
    );
  };

  return (
    <Container component="div" maxWidth="lg" sx={{ mt: mt, mb: 2 }}>
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
