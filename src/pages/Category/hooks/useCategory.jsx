import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getCategoryProducts,
  getProducts,
} from "../../../store/asyncActions/products";

export function useCategory() {
  const products = useSelector((state) => state.products.products);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id === "0") {
      dispatch(getProducts());
    } else {
      dispatch(getCategoryProducts(id));
    }
  }, [dispatch, id]);

  return { products, isError, isLoading };
}
