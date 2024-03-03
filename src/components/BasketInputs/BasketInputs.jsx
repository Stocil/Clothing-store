import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  BasketCountButton,
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
        <BasketCountButton
          size="small"
          disabled={product.count === 1}
          onClick={() => {
            setCount((current) => +current - 1);
            handleAddProductCount({ amount: product.count - 1 });
          }}
        >
          <RemoveIcon fontSize="small" />
        </BasketCountButton>

        <ProductBasketAmountInput
          count={count}
          setCount={setCount}
          onChange={handleAddProductCount}
        />

        <BasketCountButton
          size="small"
          onClick={() => {
            setCount((current) => +current + 1);
            handleAddProductCount({});
          }}
        >
          <AddIcon fontSize="small" />
        </BasketCountButton>
      </BasketCountManagerInputs>

      <IconButton size="small" onClick={handleDeleteProductFromBasket}>
        <DeleteIcon color="error" fontSize="large" />
      </IconButton>
    </BasketCountManagerInner>
  );
}
