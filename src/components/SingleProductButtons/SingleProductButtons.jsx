import { IconButton, Skeleton, Stack } from "@mui/material";
import { AddButton } from "./SingleProductButtons.styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export function SingleProductButtons({
  isLoading,
  isProductInFavourite,
  handleAddToBasket,
  handleAddToFavourite,
  handleDeleteProductFromFavourite,
  theme = "light",
}) {
  if (isLoading) {
    return <Skeleton width={150} height={70} />;
  }

  return (
    <Stack direction="row" spacing={3}>
      <AddButton color="secondary" onClick={handleAddToBasket} theme={theme}>
        Add to cart
      </AddButton>

      <IconButton
        onClick={
          !isProductInFavourite
            ? handleAddToFavourite
            : handleDeleteProductFromFavourite
        }
      >
        {!isProductInFavourite ? (
          <FavoriteBorderIcon color="secondary" fontSize="large" />
        ) : (
          <FavoriteIcon color="secondary" fontSize="large" />
        )}
      </IconButton>
    </Stack>
  );
}
