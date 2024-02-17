import { Button, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Products } from "../../components/Products/Products";
import { useCategory } from "./hooks/useCategory";

export function Category() {
  const {
    products,
    isError,
    isLoading,
    isOver,
    currentOffset,
    handleNextPage,
    handlePreviousPage,
  } = useCategory();

  return (
    <Stack alignItems="center">
      <Products
        products={products}
        isError={isError}
        isLoading={isLoading}
        errorJustify="center"
      />

      {!isLoading && !isError ? (
        <Stack direction="row" gap={7} mt={5}>
          {currentOffset !== 0 ? (
            <Button color="secondary" size="large" onClick={handlePreviousPage}>
              <ArrowBackIcon sx={{ mr: 1 }} />
              Previous page
            </Button>
          ) : null}

          {!isOver ? (
            <Button color="secondary" size="large" onClick={handleNextPage}>
              Next page
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          ) : null}
        </Stack>
      ) : null}
    </Stack>
  );
}
