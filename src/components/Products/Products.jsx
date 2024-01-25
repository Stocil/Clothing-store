import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ProductErrorText,
  ProductImageInner,
  ProductItemInner,
} from "./Products.styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

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

    if (!product.images[0] || !product.price || !product.title) return null;

    return (
      <Grid key={product.id} item xs={1} display="flex">
        <ProductItemInner>
          <ProductImageInner>
            <img className="product__image" src={product.images[0]} />
          </ProductImageInner>

          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Box>
              <Typography variant="h6" component="p" fontWeight={700}>
                ${product.price}
              </Typography>

              <Typography component="p">{product.title}</Typography>
            </Box>

            <Stack justifyContent="center">
              <IconButton
                sx={{
                  bgcolor: (theme) => theme.palette.primary.dark,
                  "&:hover": { bgcolor: (theme) => theme.palette.primary.dark },
                }}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Stack>
          </Stack>
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
