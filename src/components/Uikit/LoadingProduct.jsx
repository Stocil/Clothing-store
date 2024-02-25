import { Grid, Skeleton, Stack } from "@mui/material";
import {
  ProductCategoryLabel,
  ProductItemInner,
} from "../ProductsList/ProductsList.styles";

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
          }}
        >
          <Skeleton variant="rounded" width={310} height={310}></Skeleton>

          <Stack direction="row" justifyContent="space-between">
            <Skeleton width={200} animation="wave" />
            <Skeleton width={40} height={40} variant="circular" />
          </Stack>

          <Stack gap={1}>
            <ProductCategoryLabel>
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
