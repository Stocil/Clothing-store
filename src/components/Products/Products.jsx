import { Container, Grid, Typography } from "@mui/material";
import {
  ProductErrorText,
  ProductImageInner,
  ProductItemInner,
} from "./Products.styles";

export function Products({
  products = [],
  isError = false,
  isLoading = false,
  maxProduct = null,
}) {
  const productsList = products.map((product, index) => {
    if (maxProduct && index >= maxProduct) {
      return null;
    }

    return (
      <Grid key={product.id} item xs={1} display="flex">
        <ProductItemInner>
          <ProductImageInner>
            <img className="product__image" src={product.images[0]} />
          </ProductImageInner>

          <Typography variant="h6" component="p" fontWeight={700} mt={2}>
            ${product.price}
          </Typography>

          <Typography component="p">{product.title}</Typography>
        </ProductItemInner>
      </Grid>
    );
  });

  const renderContent = () => {
    let content;

    if (isError) {
      content = <ProductErrorText variant="h4">{isError}</ProductErrorText>;
    } else if (productsList.length === 0) {
      content = (
        <ProductErrorText variant="h4">
          There are no products in this Category
        </ProductErrorText>
      );
    } else {
      content = productsList;
    }

    return (
      <Grid container spacing={5} columns={3}>
        {content}
      </Grid>
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
