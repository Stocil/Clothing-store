import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { useProduct } from "./hooks/useProduct";
import { useState } from "react";

export function Product() {
  const { product, isError, isLoading } = useProduct();
  const [mainImage, setMainImage] = useState(0);

  const renderImages = () => {
    if (!product.images) return;

    const images = product.images.map((imageUrl, index) => {
      return (
        <img
          onClick={() => setMainImage(index)}
          key={imageUrl}
          src={imageUrl}
          className="product__side-image"
        />
      );
    });

    return (
      <Stack gap={2} maxWidth="600px" flexShrink="0">
        <Stack>
          <img
            src={product.images[mainImage]}
            className="product__main-image"
          />
        </Stack>

        <Stack direction="row" justifyContent="center" gap={2}>
          {images}
        </Stack>
      </Stack>
    );
  };

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 5 }}>
      {isLoading || isError ? (
        <Typography
          variant="h4"
          fontWeight={700}
          sx={
            isError
              ? {
                  padding: "20px",
                  border: "2px solid #d32f2f",
                  borderRadius: "20px",
                }
              : {}
          }
        >
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

          <Stack spacing={3}>
            <Typography variant="h4">{product.title}</Typography>

            <Typography variant="h5" component="p" fontWeight="700">
              {product.price}$
            </Typography>

            <Stack direction="row" spacing={3} alignItems="center">
              <Typography sx={{ opacity: 0.6 }}>Sizes: </Typography>

              <Stack direction="row" spacing={1}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ minWidth: "45px", fontSize: "16px" }}
                >
                  4.5
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ minWidth: "40px", fontSize: "16px" }}
                >
                  5
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  sx={{ minWidth: "40px", fontSize: "16px" }}
                >
                  5.5
                </Button>
              </Stack>
            </Stack>

            <Typography variant="h6" sx={{ opacity: 0.6 }}>
              {product.description}
            </Typography>

            <Stack direction="row" spacing={3}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  textTransform: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Add to cart
              </Button>

              <Button
                variant="contained"
                size="large"
                sx={{
                  textTransform: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Add to favorites
              </Button>
            </Stack>
          </Stack>
        </Paper>
      )}
    </Container>
  );
}
