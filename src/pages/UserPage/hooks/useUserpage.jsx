import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../store/actions";

import { getProducts } from "../../../store/asyncActions/products";

export function useUserpage(setModalOpen) {
  const dispatch = useDispatch();

  const recentProducts = [];
  const products = useSelector((state) => state.products.products);
  const recentProductsList = useSelector(
    (state) => state.currentUser.recentProducts
  );

  searchRecentProducts();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function searchRecentProducts() {
    for (let index = 0; index < recentProductsList.length; index++) {
      products.map((product) => {
        if (recentProductsList[index] === product?.id + "") {
          recentProducts.push(product);
        }
      });
    }
  }

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }

  function handleCloseModal() {
    setModalOpen((t) => !t);
  }

  return { handleLogOut, handleCloseModal };
}
