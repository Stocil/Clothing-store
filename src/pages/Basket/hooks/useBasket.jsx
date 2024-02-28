import { useState } from "react";
import { useSelector } from "react-redux";
import { useDeleteProduct } from "../../../hooks/useDeleteProduct";

export function useBasket() {
  const currentUser = useSelector((state) => state.currentUser);
  const isLogged = currentUser.id || false;

  const basketProducts = currentUser.basket || [];

  const [isAgree, setAgree] = useState(false);
  const [isBasketSnackOpen, setBasketSnackOpen] = useState(false);

  const { handleDeleteProductFromBasket } = useDeleteProduct({});

  let totalPrice = 0;
  let totalProducts = 0;
  basketProducts.map((product) => {
    totalPrice += product.finalPrice * product.count;
    totalProducts += product.count;
  });

  function handleToggleAgree() {
    setAgree((current) => !current);
  }

  function handleToggleSnack() {
    setBasketSnackOpen((current) => !current);
  }

  function handleBuyProducts() {
    handleToggleSnack();
    if (isAgree) {
      handleDeleteProductFromBasket({ all: true });
    }
  }

  return {
    isLogged,
    basketProducts,
    totalPrice,
    totalProducts,
    isAgree,
    handleToggleAgree,
    isBasketSnackOpen,
    handleToggleSnack,
    handleBuyProducts,
  };
}
