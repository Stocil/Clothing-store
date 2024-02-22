import { Box, Container, Paper, Typography } from "@mui/material";
import { useFavourite } from "./hooks/useFavourite";
import { Products } from "../../components/Products/Products";

export function Favourite() {
  const { favouriteProducts } = useFavourite();

  return (
    <Container sx={{ pt: 8, my: 7 }}>
      {favouriteProducts?.length ? (
        <>
          <Typography variant="h2" mb={2}>
            Favorite ({favouriteProducts.length})
          </Typography>

          <Paper sx={{ p: 1, width: "100%" }}>
            <Products
              products={favouriteProducts}
              mt={1}
              errorJustify="center"
              direction="column"
              sales={false}
              favourite
            />
          </Paper>
        </>
      ) : (
        <Box textAlign="center">
          <Typography variant="h2">The favorite list is empty</Typography>

          <Typography variant="h6" component="p" mt={2}>
            Use the search to find everything you need
          </Typography>
        </Box>
      )}
    </Container>
  );
}
