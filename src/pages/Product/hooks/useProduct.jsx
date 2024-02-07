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
import {
  updateCurrentUserRecentProducts,
  updateUsersRecentProducts,
} from "../../../store/actions/index.js";
import { useLocalStorage } from "../../../hooks/useLocalStorage.jsx";

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

  // const {
  //   setStorageItem: setCurrentUserStorage,
  //   getStorageItem: getCurrentUser,
  // } = useLocalStorage("currentUser");

  // const { setStorageItem: setUsersStorage, getStorageItem: getUsers } =
  //   useLocalStorage("users");

  // const currentUser = getCurrentUser();

  // if (currentUser.id) {
  //   const users = getUsers()[0] ? getUsers() : [];
  //   const currentUserFullData = users.filter((user) => {
  //     if (user.name === currentUser.name) {
  //       return user;
  //     }
  //   })[0];

  //   const updatedCurrentUser = {
  //     name: currentUser.name,
  //     email: currentUser.email,
  //     avatarUrl: currentUser.avatarUrl,
  //     id: currentUser.id,
  //     recentProducts: [...currentUser.recentProducts, product.id],
  //   };

  //   const updatedUserFullData = {
  //     name: currentUser.name,
  //     email: currentUser.email,
  //     avatarUrl: currentUser.avatarUrl,
  //     id: currentUser.id,
  //     password: currentUserFullData.password,
  //     recentProducts: [...currentUser.recentProducts, product.id],
  //   };

  //   const updatedUserFullDataForStorage = users.map((user) => {
  //     if (user.id === updatedUserFullData.id) {
  //       return {
  //         ...user,
  //         name: updatedUserFullData.name,
  //         email: updatedUserFullData.email,
  //         avatarUrl: updatedUserFullData.avatarUrl,
  //         recentProducts: updatedUserFullData.recentProducts,
  //       };
  //     }

  //     return user;
  //   });

  //   setCurrentUserStorage(updatedCurrentUser);
  //   setUsersStorage(updatedUserFullDataForStorage);
  // }

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!product.category?.id) return;

    dispatch(getCategoryProducts(product.category?.id));
  }, [dispatch, product.category?.id]);

  // useEffect(() => {
  //   if (!product.id || !currentUser.id) return;

  //   dispatch(updateCurrentUserRecentProducts(product.id));
  //   dispatch(
  //     updateUsersRecentProducts({
  //       id: currentUser.id,
  //       productId: product.id,
  //     })
  //   );
  // }, [dispatch, product.id, currentUser.id]);

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
