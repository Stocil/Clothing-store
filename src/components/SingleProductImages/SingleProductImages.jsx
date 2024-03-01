import { Skeleton, Stack } from "@mui/material";

export function SingleProductImages({
  product,
  mainImage,
  handleMainImage,
  isLoading,
}) {
  if (isLoading) {
    return <Skeleton width={600} height={600} variant="rounded" />;
  }

  if (!product.images) return;

  const images = product.images.map((imageUrl, index) => {
    if (!imageUrl.startsWith("https")) return null;

    return (
      <img
        key={imageUrl}
        onClick={() => handleMainImage(index)}
        src={imageUrl}
        className="product__side-image"
      />
    );
  });

  return (
    <Stack gap={2} maxWidth="600px" flexShrink="0">
      <Stack>
        <img
          src={
            product.images[mainImage].startsWith("https")
              ? product.images[mainImage]
              : "https://uhdpapers.com/wp-content/uploads/2018/01/blur1-1024x576.png"
          }
          className="product__main-image"
        />
      </Stack>

      <Stack direction="row" justifyContent="center" gap={2}>
        {images}
      </Stack>
    </Stack>
  );
}
