import { useSelector } from "react-redux";

export function useBasket() {
  const currentUser = useSelector((state) => state.currentUser);
  const basketProducts = currentUser.basket;

  let totalPrice = 0;
  let totalProducts = 0;
  basketProducts.map((product) => {
    totalPrice += product.finalPrice * product.count;
    totalProducts += product.count;
  });

  return { basketProducts, totalPrice, totalProducts };
}
