import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../store/actions";

import { getProducts } from "../../../store/asyncActions/products";
import { getProductsByIds } from "../../../utils/getProductsByIds";

export function useUserpage(setModalOpen) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);
  const productsData = {
    isError: useSelector((state) => state.products.error),
    isLoading: useSelector((state) => state.products.loading),
  };

  const recentProductsList = useSelector(
    (state) => state.currentUser.recentProducts
  );

  productsData.products = getProductsByIds(products, recentProductsList);

  console.log(productsData);

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }

  function handleToggleModal() {
    setModalOpen((t) => !t);
  }

  return { handleLogOut, handleToggleModal, productsData };
}
