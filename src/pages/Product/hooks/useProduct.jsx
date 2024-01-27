import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../../store/asyncActions/products";

export function useProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.oneProduct);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return { product, isError, isLoading };
}
