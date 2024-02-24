import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { logoutUser } from "../../../store/actions";
import { useEffect, useState } from "react";
import { getSearchProducts } from "../../../store/asyncActions/products";

export function useHeader() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.currentUser);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  const searchProducts =
    useSelector((state) => state.products.searchProducts) || [];
  const searchProductsIsLoading = useSelector(
    (state) => state.products.searchProductsLoading
  );

  useEffect(() => {
    dispatch(getSearchProducts(searchValue));
  }, [dispatch, searchValue]);

  let userBasketSize = 0;
  user.basket?.map((product) => {
    userBasketSize += product.count;
  });

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }

  return {
    user,
    userBasketSize,
    searchOpen,
    searchValue,

    location,
    searchProducts,
    searchProductsIsLoading,

    handleLogOut,
    setSearchParams,
    setSearchOpen,
  };
}
