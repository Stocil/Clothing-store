import { Container, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

import { useProduct } from "./hooks/useProduct";
import {
  AddButton,
  CardInner,
  ErrorTypography,
  GoBackButton,
  SizeButton,
  TransparentText,
} from "./Product.styles";

export function Product() {
  const {
    product,
    isError,
    isLoading,

    setSearchParams,
    selectSize,
    mainImage,
    setMainImage,
    peoplePurchased,
    allSizes,
  } = useProduct();

  const renderImages = () => {
    if (!product.images) return;

    const images = product.images.map((imageUrl, index) => {
      return (
        <img
          key={imageUrl}
          onClick={() => setMainImage(index)}
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

  const renderSizes = () => {
    const sizeButtons = allSizes.map((size) => {
      return (
        <SizeButton
          key={size}
          selected={size === selectSize}
          onClick={() => setSearchParams({ size: size }, { replace: true })}
        >
          {size}
        </SizeButton>
      );
    });

    if (!sizeButtons[0]) return null;

    return (
      <Stack direction="row" spacing={1} alignItems="center">
        <TransparentText>Sizes: </TransparentText>

        {sizeButtons}
      </Stack>
    );
  };

  return (
    <Container sx={{ my: 5, position: "relative" }}>
      {isLoading || isError ? (
        <ErrorTypography isError={isError}>
          {isLoading ? "Loading..." : isError}
        </ErrorTypography>
      ) : (
        <CardInner>
          {renderImages()}

          <Stack justifyContent="space-between">
            <Stack spacing={3}>
              <Typography variant="h4">{product.title}</Typography>

              <Typography variant="h5" component="p" fontWeight="700">
                {product.price}$
              </Typography>

              {renderSizes()}

              <TransparentText variant="h6">
                {product.description}
              </TransparentText>

              <Stack direction="row" spacing={3}>
                <AddButton color="secondary">Add to cart</AddButton>

                <AddButton>Add to favorites</AddButton>
              </Stack>
            </Stack>

            <TransparentText>
              {peoplePurchased} people purchased
            </TransparentText>
          </Stack>
        </CardInner>
      )}

      <Link
        to={
          product.category
            ? `/categories/${product.category?.id}`
            : "/categories/0"
        }
      >
        <GoBackButton size="large">
          <ArrowBackIcon />
        </GoBackButton>
      </Link>
    </Container>
  );
}
