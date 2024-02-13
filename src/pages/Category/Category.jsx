import { Button, Stack } from "@mui/material";
import { Products } from "../../components/Products/Products";
import { useCategory } from "./hooks/useCategory";

export function Category() {
  const { products, isError, isLoading, handleChangeOffset } = useCategory();

  return (
    <Stack alignItems="center">
      <Products
        products={products}
        isError={isError}
        isLoading={isLoading}
        errorJustify="center"
      />

      <Button color="secondary" size="large" onClick={handleChangeOffset}>
        See more
      </Button>
    </Stack>
  );
}
