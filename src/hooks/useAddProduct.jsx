import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUserBasket, updateUsersBasket } from "../store/actions";
import { useLocalStorage } from "./useLocalStorage";

export function useAddProduct(product, newPrice, size) {
  const dispatch = useDispatch();

  const finalPrice = newPrice ? +newPrice.substr(0, newPrice.length - 1) : null;

  const { setStorageItem: setUsersStorage } = useLocalStorage("users");
  const { setStorageItem: setCurrentUserStorage } =
    useLocalStorage("currentUser");

  const currentUser = useSelector((state) => state.currentUser);
  const currentUserBasket = currentUser.basket;
  let users = useSelector((state) => state.users);
  users = users[0] ? users : [];

  const updatedCurrentUser = currentUser;

  let currentUserIndex;
  const updatedUserFullDataForStorage = users.map((user, index) => {
    if (user.id === currentUser.id) {
      currentUserIndex = index;

      return user;
    }

    return user;
  });

  function handleAddToBasket() {
    const isProductInBasket =
      currentUserBasket.filter((basketProduct) => {
        if (product.id === basketProduct.id && basketProduct.size === size) {
          return basketProduct;
        }
      })[0] || false;

    let updatedBasket = currentUserBasket;

    if (isProductInBasket) {
      updatedBasket = updatedBasket.map((basketProduct) => {
        if (product.id === basketProduct.id && basketProduct.size === size) {
          console.log(basketProduct);
          return {
            ...basketProduct,
            count: basketProduct.count + 1,
          };
        }

        return basketProduct;
      });
    } else {
      const fullProductData = {
        ...product,
        size: size ? size : null,
        finalPrice: finalPrice ? finalPrice : product.price,
        count: 1,
      };

      updatedBasket.unshift(fullProductData);
    }

    // Update data for storage
    updatedCurrentUser.basket = updatedBasket;
    updatedUserFullDataForStorage[currentUserIndex].basket = updatedBasket;

    setCurrentUserStorage(updatedCurrentUser);
    setUsersStorage(updatedUserFullDataForStorage);

    dispatch(updateCurrentUserBasket(updatedBasket));
    dispatch(
      updateUsersBasket({
        products: updatedBasket,
        id: currentUser.id,
      })
    );
  }

  return { handleAddToBasket };
}
