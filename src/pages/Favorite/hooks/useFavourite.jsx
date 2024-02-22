import { useSelector } from "react-redux";

export function useFavourite() {
  const currentUser = useSelector((state) => state.currentUser);
  const favouriteProducts = currentUser.favourite || [];

  return {
    favouriteProducts,
  };
}
