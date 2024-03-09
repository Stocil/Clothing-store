import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getSearchProducts } from "../../../store/asyncActions/products";

export function useSearchBar() {
  const dispatch = useDispatch();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  const searchProducts = useSelector((state) => state.products.searchProducts);
  const searchProductsIsLoading = useSelector(
    (state) => state.products.searchProductsLoading
  );

  useEffect(() => {
    dispatch(getSearchProducts(searchValue));
  }, [dispatch, searchValue]);

  function handleChangeSearchValue(value) {
    searchParams.set("search", value);
    setSearchParams(searchParams, { replace: true });
  }

  return {
    searchValue,
    searchOpen,
    searchProducts,
    setSearchOpen,
    searchProductsIsLoading,
    handleChangeSearchValue,
  };
}
