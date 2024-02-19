import { useSelector } from "react-redux";

export function useBasket() {
  const currentUser = useSelector((state) => state.currentUser);
  const basketProducts = currentUser.basket;

  console.log(basketProducts);

  let totalPrice = 0;
  basketProducts.map((product) => {
    totalPrice += product.finalPrice * product.count;
  });

  return { basketProducts, totalPrice };
}
