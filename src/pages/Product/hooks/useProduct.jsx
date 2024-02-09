import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import {
  getCategoryProducts,
  getSingleProduct,
} from "../../../store/asyncActions/products";
import { getSizes } from "../../../utils/getSizes.js";
import { getSortedProducts } from "../../../utils/getSortedProducts.js";
import { getShuffledArray } from "../../../utils/getShuffledArray.js";
import { useUpdateUsersData } from "../../../hooks/useUpdateUsersData.jsx";

export function useProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.oneProduct);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);

  const products = getSortedProducts(
    useSelector((state) => state.products.products)
  );
  const worthSeeingProducts = getShuffledArray(products).filter((product) => {
    if (product.id !== +id) return product;
  });

  const [newPrice] = useState(useLocation().state?.newPrice);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectSize = searchParams.get("size");

  const [mainImage, setMainImage] = useState(0);
  const [peoplePurchased] = useState(() => Math.floor(Math.random() * 60));
  const allSizes = getSizes(product.category?.name) || [];

  useUpdateUsersData({ recentProducts: id }, product.id);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!product.category?.id) return;

    dispatch(getCategoryProducts(product.category?.id));
  }, [dispatch, product.category?.id]);

  return {
    product,
    isError,
    isLoading,
    setSearchParams,
    selectSize,
    mainImage,
    setMainImage,
    peoplePurchased,
    allSizes,
    newPrice,
    worthSeeingProducts,
  };
}
