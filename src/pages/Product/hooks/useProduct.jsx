import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import {
  getSingleProduct,
  updateProductList,
} from "../../../store/asyncActions/products";
import { getSizes } from "../../../utils/getSizes.js";
import { getShuffledArray } from "../../../utils/getShuffledArray.js";
import { useUpdateUsersData } from "../../../hooks/useUpdateUsersData.jsx";
import { updateCurrentUserBasket } from "../../../store/actions/index.js";

export function useProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.oneProduct);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);

  // There was a getSortedProduct func
  const products = useSelector((state) => state.products.products);

  const worthSeeingProducts = getShuffledArray(products).filter((product) => {
    if (product.id !== +id) return product;
  });

  const [newPrice] = useState(useLocation().state?.newPrice);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectSize = searchParams.get("size");

  const [mainImage, setMainImage] = useState(0);
  const [peoplePurchased] = useState(() => Math.floor(Math.random() * 60));
  const allSizes = getSizes(product.category?.name) || [];

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!product.id || product.id !== +id) return;

    dispatch(
      updateProductList({
        id: product.category?.id,
        currentOffset: 0,
        limit: 10,
      })
    );
  }, [dispatch, product, id]);

  useUpdateUsersData({ recentProducts: id }, id);

  function handleAddToBasket() {
    const finalPrice = newPrice
      ? +newPrice.substr(0, newPrice.length - 1)
      : null;

    const fullProductData = {
      ...product,
      finalPrice: finalPrice ? finalPrice : product.price,
    };

    console.log(fullProductData);

    dispatch(updateCurrentUserBasket(fullProductData));
  }

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

    handleAddToBasket,
  };
}
