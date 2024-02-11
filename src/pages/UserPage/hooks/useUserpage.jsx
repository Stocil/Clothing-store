import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../store/actions";

import { getProducts } from "../../../store/asyncActions/products";

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

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }

  function handleToggleModal() {
    setModalOpen((t) => !t);
  }

  return { handleLogOut, handleToggleModal, productsData };
}

function getProductsByIds(products, idsList) {
  const selectedProducts = [];

  for (let index = 0; index < idsList.length; index++) {
    products.map((product) => {
      if (idsList[index] === product?.id + "") {
        selectedProducts.push(product);
      }
    });
  }

  return selectedProducts;
}
