import { Grid, Skeleton, Stack } from "@mui/material";
import {
  ProductCategoryLabel,
  ProductItemInner,
} from "../../ProductsList/ProductsList.styles";
import {
  LoadingButton,
  LoadingImage,
  LoadingTitle,
} from "./LoadingProduct.styles";

export function LoadingProduct({ count = 1 }) {
  const products = [];

  for (let i = 0; i < count; i++) {
    products.push(
      <Grid key={i} item xs={1} display={"flex"}>
        <ProductItemInner
          variant="outlined"
          sx={{
            flexDirection: "column",
            position: "relative",
            margin: { xs: "0 20px", ss: "0" },
          }}
        >
          <LoadingImage variant="rounded"></LoadingImage>

          <Stack direction="row" justifyContent="space-between">
            <LoadingTitle animation="wave" />
            <LoadingButton variant="circular" />
          </Stack>

          <Stack gap={1}>
            <ProductCategoryLabel maxWidth={90}>
              <Skeleton width={60} height={25} animation="wave" />
            </ProductCategoryLabel>

            <Stack>
              <Skeleton width={50} height={18} animation="wave" />
              <Skeleton width={32} height={40} animation="wave" />
            </Stack>
          </Stack>
        </ProductItemInner>
      </Grid>
    );
  }

  return products;
}
