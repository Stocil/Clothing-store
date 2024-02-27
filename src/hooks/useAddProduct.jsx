import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentUserBasket,
  updateCurrentUserFavourite,
  updateUsersBasket,
  updateUsersFavourite,
} from "../store/actions";
import { useState } from "react";

export function useAddProduct({ product, newPrice = null, selectSize = null }) {
  const dispatch = useDispatch();

  const [snackOpen, setSnackOpen] = useState(false);
  const finalPrice = newPrice ? +newPrice.substr(0, newPrice.length - 1) : null;

  const currentUser = useSelector((state) => state.currentUser);
  const currentUserBasket = currentUser.basket;
  const currentUserFavourite = currentUser.favourite;

  const isProductInFavourite =
    currentUserFavourite?.filter((favouriteProduct) => {
      if (
        product.id === favouriteProduct.id &&
        selectSize === favouriteProduct.size
      ) {
        return favouriteProduct;
      }
    })[0] || false;

  function handleAddToBasket({ amount = null }) {
    if (!currentUser.id) return;

    const isProductInBasket =
      currentUserBasket.filter((basketProduct) => {
        if (
          product.id === basketProduct.id &&
          basketProduct.size === selectSize
        ) {
          return basketProduct;
        }
      })[0] || false;

    let updatedBasket = currentUserBasket;

    if (isProductInBasket) {
      updatedBasket = updatedBasket.map((basketProduct) => {
        if (
          product.id === basketProduct.id &&
          basketProduct.size === selectSize
        ) {
          return {
            ...basketProduct,
            count:
              amount !== null
                ? amount === 0
                  ? 1
                  : amount
                : basketProduct.count + 1,
          };
        }

        return basketProduct;
      });
    } else {
      const fullProductData = {
        ...product,
        size: selectSize ? selectSize : null,
        finalPrice: finalPrice ? finalPrice : product.price,
        count: 1,
      };

      updatedBasket.unshift(fullProductData);
    }

    dispatch(updateCurrentUserBasket(updatedBasket));
    dispatch(
      updateUsersBasket({
        products: updatedBasket,
        id: currentUser.id,
      })
    );

    handleToggleSnack();
  }

  function handleAddToFavourite() {
    if (!currentUser.id) return;

    let updatedFavourite = currentUserFavourite;

    const fullProductData = {
      ...product,
      size: selectSize ? selectSize : null,
      finalPrice: finalPrice ? finalPrice : product.price,
    };

    updatedFavourite.unshift(fullProductData);

    dispatch(updateCurrentUserFavourite(updatedFavourite));
    dispatch(
      updateUsersFavourite({
        products: updatedFavourite,
        id: currentUser.id,
      })
    );

    handleToggleSnack();
  }

  function handleToggleSnack() {
    setSnackOpen((current) => !current);
  }

  return {
    handleAddToBasket,
    handleAddToFavourite,
    isProductInFavourite,
    handleToggleSnack,
    snackOpen,
  };
}
