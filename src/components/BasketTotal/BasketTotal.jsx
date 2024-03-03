import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { BasketBuyButton, BasketTotalInner } from "./BasketTotal.styles";

export function BasketTotal({
  totalProducts,
  totalPrice,
  isAgree,
  onAgree,
  handleBuyProducts,
}) {
  return (
    <BasketTotalInner>
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
          control={
            <Checkbox color="secondary" checked={isAgree} onClick={onAgree} />
          }
          componentsProps={{ typography: { fontSize: { xs: 12, ss: 16 } } }}
        />

        <BasketBuyButton
          color="secondary"
          variant="contained"
          onClick={handleBuyProducts}
        >
          Order
        </BasketBuyButton>
      </Stack>
    </BasketTotalInner>
  );
}
