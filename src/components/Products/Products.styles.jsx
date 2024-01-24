import { Box, Paper, Typography, styled } from "@mui/material";

export const ProductErrorText = styled(Typography)({
  marginTop: "80px",
  fontWeight: "700",
  marginLeft: "40px",
});

export const ProductItemInner = styled(Paper)({
  padding: "20px",
});

export const ProductImageInner = styled(Box)({
  overflow: "hidden",
  borderRadius: "20px",
  display: "flex",
});
