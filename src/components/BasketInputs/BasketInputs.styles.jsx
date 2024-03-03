import { Button, Stack, TextField, styled } from "@mui/material";

export const BasketCountManagerInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "end",
  gap: 20,

  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },

  [theme.breakpoints.down("ss")]: {
    gap: theme.spacing(1),
  },
}));

export const BasketCountManagerInputs = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  marginTop: 16,

  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
  },
}));

export const BasketCountButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  minWidth: "40px",

  [theme.breakpoints.up("xl")]: {
    minWidth: "64px",
  },
}));

export const ProductBasketAmountInput = ({ count, setCount, onChange }) => {
  return (
    <TextField
      type="number"
      variant="outlined"
      color="secondary"
      value={count}
      onChange={(e) => {
        onChange({ amount: +e.target.value });
        setCount(+e.target.value);
      }}
      onBlur={(e) =>
        e.target.value <= 0 ? setCount(1) : setCount(e.target.value)
      }
      inputProps={{
        style: {
          fontSize: "inherit",
          textAlign: "center",
          padding: "5px 10px",
        },
      }}
      InputProps={{ sx: { fontSize: { xs: 18, sm: 24 } } }}
      sx={{
        width: { xs: "50px", sm: "70px" },
      }}
    />
  );
};
