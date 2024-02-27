import {
  Box,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductItemInner = styled(Paper)({
  padding: "20px",
  display: "flex",
  gap: "30px",
  position: "relative",
});

export const ProductImageInner = styled(Box)({
  overflow: "hidden",
  borderRadius: "20px",
  display: "flex",
});

export const ProductInfoInner = styled(Stack)({
  gap: "8px",
  position: "relative",
});

export const ProductPriceText = styled(Typography)({
  fontSize: 12,
  opacity: 0.6,
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

export const ProductCardButton = ({ onClick, isLoading }) => {
  if (isLoading) {
    return <Skeleton width={40} height={40} variant="circular" />;
  }

  return (
    <ProductCardButtonStyle onClick={onClick}>
      <AddShoppingCartIcon />
    </ProductCardButtonStyle>
  );
};

export const ProductCategoryLabel = styled(Typography)(
  ({ bgcolor = null, theme }) => ({
    alignSelf: "start",
    padding: "6px 12px",
    border: "1px solid",
    borderRadius: "25px",
    backgroundColor: bgcolor ? theme.palette.primary.dark : null,
  })
);

export const ProductsTitleText = styled(Typography)({
  fontWeight: "700",
  wordWrap: "break-word",
});

export const ProductsLabelsInner = styled(Stack)({
  flexDirection: "row",
  gap: 8,
});
