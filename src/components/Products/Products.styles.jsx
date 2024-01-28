import { Box, IconButton, Paper, Stack, styled } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductItemInner = styled(Paper)({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
});

export const ProductImageInner = styled(Box)({
  overflow: "hidden",
  borderRadius: "20px",
  display: "flex",
});

export const ProductInfoInner = styled(Stack)({
  justifyContent: "space-between",
  marginTop: "16px",
});

export const ProductLastSectionInner = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  gap: "8px",
});

const ProductCardButtonStyle = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const ProductCardButton = ({ onClick }) => {
  return (
    <ProductCardButtonStyle onClick={onClick}>
      <AddShoppingCartIcon />
    </ProductCardButtonStyle>
  );
};
