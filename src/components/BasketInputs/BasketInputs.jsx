import { Button, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  BasketCountManagerInner,
  BasketCountManagerInputs,
  ProductBasketAmountInput,
} from "./BasketInputs.styles";

export function BasketCountManager({
  product,
  count,
  setCount,
  handleAddProductCount,
  handleDeleteProductFromBasket,
}) {
  return (
    <BasketCountManagerInner>
      <BasketCountManagerInputs>
        <Button
          size="small"
          sx={{ py: "10px" }}
          disabled={product.count === 1}
          onClick={() => {
            setCount((current) => +current - 1);
            handleAddProductCount({ amount: product.count - 1 });
          }}
        >
          <RemoveIcon fontSize="small" />
        </Button>

        <ProductBasketAmountInput
          count={count}
          setCount={setCount}
          onChange={handleAddProductCount}
        />

        <Button
          size="small"
          sx={{ py: "10px" }}
          onClick={() => {
            setCount((current) => +current + 1);
            handleAddProductCount({});
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </BasketCountManagerInputs>

      <IconButton size="small" onClick={handleDeleteProductFromBasket}>
        <DeleteIcon color="error" fontSize="large" />
      </IconButton>
    </BasketCountManagerInner>
  );
}
