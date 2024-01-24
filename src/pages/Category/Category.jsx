import { Products } from "../../components/Products/Products";
import { useCategory } from "./hooks/useCategory";

export function Category() {
  const { products, isError, isLoading } = useCategory();

  return (
    <Products products={products} isError={isError} isLoading={isLoading} />
  );
}
