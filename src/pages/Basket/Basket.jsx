import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Products } from "../../components/Products/Products";
import { useBasket } from "./hooks/useBasket";

export function Basket() {
  const { basketProducts: products, totalPrice, totalProducts } = useBasket();

  return (
    <Container sx={{ my: 7, pt: 8 }}>
      {products?.length ? (
        <>
          <Typography variant="h2" mb={2}>
            Basket
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            alignItems="start"
            justifyContent="space-between"
          >
            <Paper sx={{ p: 1, width: "100%" }}>
              <Products
                products={products}
                mt={1}
                errorJustify="center"
                direction="column"
                sales={false}
              />
            </Paper>

            <Paper sx={{ p: 3, maxWidth: "350px" }}>
              <Stack spacing={2}>
                <Typography variant="h6" component="p" fontWeight="700">
                  Your basket
                </Typography>

                <Typography variant="p">Products: {totalProducts}</Typography>

                <Typography variant="h4" component="p" fontWeight="700">
                  Total: {totalPrice} $
                </Typography>

                <FormControlLabel
                  label="I agree with the terms of use of the trading platform"
                  control={<Checkbox color="secondary" />}
                />

                <Button
                  sx={{ p: "16px 24px", fontSize: 16, fontWeight: 700 }}
                  variant="contained"
                  color="secondary"
                >
                  Order
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </>
      ) : (
        <>
          <Typography variant="h2">The basket is empty</Typography>

          <Typography variant="h6" component="p" mt={2}>
            Use the search to find everything you need
          </Typography>
        </>
      )}
    </Container>
  );
}
