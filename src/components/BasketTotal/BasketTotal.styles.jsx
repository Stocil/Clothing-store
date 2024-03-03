import { Button, Paper, styled } from "@mui/material";

export const BasketTotalInner = styled(Paper)(({ theme }) => ({
  padding: 24,
  maxWidth: "350px",

  [theme.breakpoints.down("lg")]: {
    maxWidth: "none",
    width: "100%",
  },
}));

export const BasketBuyButton = styled(Button)({
  padding: "16px 24px",
  fontSize: 16,
  fontWeight: 700,
});
