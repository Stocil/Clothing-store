import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getProducts } from "../../../store/asyncActions/products";
import { getSortedProducts } from "../../../utils/getSortedProducts";
import { getShuffledArray } from "../../../utils/getShuffledArray";
import { getSale } from "../../../utils/getSale";

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

  const shuffledSaleProducts = getShuffledArray(sortedProducts);
  const saleProducts = getSale(shuffledSaleProducts).filter((product) => {
    if (product.sale) {
      return product;
    }
  });

  return { trandingProducts, saleProducts, isError, isLoading };
}
