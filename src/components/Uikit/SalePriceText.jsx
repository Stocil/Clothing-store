import { Typography, styled } from "@mui/material";

export const SalePriceText = ({ children, isSale, variant = "h6" }) => {
  const StyledPriceText = styled(Typography)(({ theme }) => ({
    fontWeight: "700",
    textDecoration: isSale ? "line-through" : null,
    opacity: isSale ? "0.5" : null,
    color: isSale ? theme.palette.primary.dark : null,
  }));

  return (
    <StyledPriceText variant={variant} component="p">
      {children}
    </StyledPriceText>
  );
};
