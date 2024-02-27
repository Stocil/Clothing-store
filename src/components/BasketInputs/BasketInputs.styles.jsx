import { Stack, TextField, styled } from "@mui/material";

export const BasketCountManagerInner = styled(Stack)({
  flexDirection: "row",
  alignItems: "end",
  gap: 20,
});

export const BasketCountManagerInputs = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  marginTop: 16,
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
        setCount(+e.target.value);
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
