import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

import { updateProductList } from "../../../store/asyncActions/products";

export function useCategory() {
  const products = useSelector((state) => state.products.products);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);
  const isOver = useSelector((state) => state.products.productsOver);

  const dispatch = useDispatch();
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentOffset = +searchParams.get("offset") || 0;

  useEffect(() => {
    if (id === "0") {
      dispatch(updateProductList({ currentOffset }));
    } else {
      dispatch(updateProductList({ id, currentOffset }));
    }
  }, [dispatch, id, currentOffset]);

  function handleNextPage() {
    setSearchParams({ offset: currentOffset + 6 }, { replace: true });
  }

  function handlePreviousPage() {
    setSearchParams({ offset: currentOffset - 6 }, { replace: true });
  }

  return {
    products,
    isError,
    isLoading,
    isOver,
    currentOffset,
    handleNextPage,
    handlePreviousPage,
  };
}
