import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
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
  gap: "8px",
  position: "relative",
});

export const ProductLastSectionInner = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "start",
  gap: "8px",
});

const ProductCardButtonStyle = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  position: "absolute",
  top: "0",
  right: "0",
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

export const ProductCategoryLabel = styled(Typography)(({ theme }) => ({
  alignSelf: "start",
  padding: "6px 12px",
  border: "1px solid",
  borderRadius: "25px",
  backgroundColor: theme.palette.primary.main,
}));

export const ProductsTitleText = styled(Typography)({
  fontWeight: "700",
  width: "calc(100% - 40px)",
  wordWrap: "break-word",
  maxWidth: "250px",
});