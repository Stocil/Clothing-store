import { Container, Grid, Typography } from "@mui/material";
import {
  ProductCardButton,
  ProductErrorText,
  ProductImageInner,
  ProductInfoInner,
  ProductItemInner,
  ProductLastSectionInner,
} from "./Products.styles";

export function Products({
  products = [],
  isError = false,
  isLoading = false,
  maxProduct = null,
  title = null,
}) {
  const productsList = products.map((product, index) => {
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

    return (
      <Grid key={product.id} item xs={1} display="flex">
        <ProductItemInner>
          <ProductImageInner>
            <img className="product__image" src={product.images[0]} />
          </ProductImageInner>

          <ProductInfoInner>
            <Typography variant="h6" component="p" fontWeight={700}>
              ${product.price}
            </Typography>

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
