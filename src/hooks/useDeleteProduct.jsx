import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentUserBasket,
  updateCurrentUserFavourite,
  updateUsersBasket,
  updateUsersFavourite,
} from "../store/actions";

//

export function useDeleteProduct({ productId = null, selectSize = null }) {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);
  const currentUserBasket = currentUser.basket;
  const currentUserFavourite = currentUser.favourite;

  function handleDeleteProductFromBasket({ all = false }) {
    const updatedBasket = !all
      ? currentUserBasket.filter((basketProduct) => {
          if (
            productId === basketProduct.id &&
            selectSize === basketProduct.size
          )
            return null;

          return basketProduct;
        })
      : [];

    dispatch(updateCurrentUserBasket(updatedBasket));
    dispatch(
      updateUsersBasket({
        products: updatedBasket,
        id: currentUser.id,
      })
    );
  }

  function handleDeleteProductFromFavourite() {
    const updatedFavourite = currentUserFavourite.filter((favouriteProduct) => {
      if (
        productId === favouriteProduct.id &&
        selectSize === favouriteProduct.size
      )
        return null;

      return favouriteProduct;
    });

    dispatch(updateCurrentUserFavourite(updatedFavourite));
    dispatch(
      updateUsersFavourite({
        products: updatedFavourite,
        id: currentUser.id,
      })
    );
  }

  return { handleDeleteProductFromBasket, handleDeleteProductFromFavourite };
}
