import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

import {
  getCategoryProducts,
  getProducts,
  updateProductList,
} from "../../../store/asyncActions/products";

export function useCategory() {
  const products = useSelector((state) => state.products.products);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentOffset = +searchParams.get("offset") || 0;

  console.log(products);

  useEffect(() => {
    if (id === "0") {
      dispatch(updateProductList({ currentOffset }));
      // dispatch(getProducts());
    } else {
      dispatch(updateProductList({ id, currentOffset }));
      // dispatch(getCategoryProducts(id));
    }
  }, [dispatch, id, currentOffset]);

  function handleChangeOffset() {
    setSearchParams({ offset: currentOffset + 6 }, { replace: true });
  }

  return { products, isError, isLoading, handleChangeOffset };
}
