import {
  Box,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductItemInner = styled(Paper)({
  padding: "20px",
  display: "flex",
  gap: "30px",
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

export const ProductCategoryLabel = styled(Typography)({
  alignSelf: "start",
  padding: "6px 12px",
  border: "1px solid",
  borderRadius: "25px",
});

export const ProductsTitleText = styled(Typography)({
  fontWeight: "700",
  wordWrap: "break-word",
});

export const ProductBasketAmountInput = ({ count, setCount, onChange }) => {
  return (
    <TextField
      type="number"
      variant="outlined"
      color="secondary"
      value={count}
      onChange={(e) => {
        onChange({ amount: +e.target.value });
        setCount(e.target.value);
      }}
      onBlur={(e) =>
        e.target.value <= 0 ? setCount(1) : setCount(e.target.value)
      }
      inputProps={{
        style: {
          fontSize: "24px",
          textAlign: "center",
          padding: "5px 10px",
        },
      }}
      sx={{
        maxWidth: "70px",
      }}
    />
  );
};
