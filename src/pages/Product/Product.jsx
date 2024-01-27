import { Container, Paper, Stack, Typography } from "@mui/material";
import { useProduct } from "./hooks/useProduct";

export function Product() {
  const { product, isError, isLoading } = useProduct();

  const renderImages = () => {
    let mainImage = null;

    if (!product.images) return;

    const images = product.images.map((imageUrl, index) => {
      if (index === 0) {
        mainImage = (
          <img key={imageUrl} src={imageUrl} className="product__main-image" />
        );
      }

      return (
        <img key={imageUrl} src={imageUrl} className="product__side-image" />
      );
    });

    return (
      <Stack gap={3} maxWidth="600px">
        <Stack>{mainImage}</Stack>

        <Stack direction="row" justifyContent="space-between">
          {images}
        </Stack>
      </Stack>
    );
  };

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 5 }}>
      {isLoading || isError ? (
        <Typography variant="h4" fontWeight={700}>
          {isLoading ? "Loading..." : isError}
        </Typography>
      ) : (
        <Paper
          sx={{
            padding: "20px",
            display: "flex",

            gap: "32px",
          }}
        >
          {renderImages()}

          <Typography variant="h4" fontWeight="700">
            {product.title}
          </Typography>
        </Paper>
      )}
    </Container>
  );
}
