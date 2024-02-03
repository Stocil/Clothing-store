import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getProducts } from "../../../store/asyncActions/products";
import { getSortedProducts } from "../../../utils/getSortedProducts";
import { getShuffledArray } from "../../../utils/getShuffledArray";

export function useHomepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.products.products);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);

  const sortedProducts = getSortedProducts(productList);
  const trandingProducts = getShuffledArray(sortedProducts);

  return { trandingProducts, isError, isLoading };
}
