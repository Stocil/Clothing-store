import { useDispatch } from "react-redux";
import { updateCurrentUserBasket, updateUsersBasket } from "../store/actions";
import { useLocalStorage } from "./useLocalStorage";

export function useAddProduct(product, newPrice) {
  const dispatch = useDispatch();

  const finalPrice = newPrice ? +newPrice.substr(0, newPrice.length - 1) : null;

  const {
    setStorageItem: setCurrentUserStorage,
    getStorageItem: getCurrentUser,
  } = useLocalStorage("currentUser");

  const { setStorageItem: setUsersStorage, getStorageItem: getUsers } =
    useLocalStorage("users");

  const currentUser = getCurrentUser();
  const users = getUsers()[0] ? getUsers() : [];
  const currentUserFullData = users.filter((user) => {
    if (user.name === currentUser.name) {
      return user;
    }
  })[0];

  // For storage, dispatch
  const updatedCurrentUser = {
    ...currentUser,
  };

  // For storage
  const updatedUserFullDataForStorage = users.map((user) => {
    if (user.id === currentUser.id) {
      return {
        ...updatedCurrentUser,
        password: currentUserFullData.password,
      };
    }

    return user;
  });

  function handleAddToBasket() {
    const fullProductData = {
      ...product,
      finalPrice: finalPrice ? finalPrice : product.price,
    };

    // TODO: Check whether the product is in the cart or not, then change
    // updatedCurrentUser basket field and then refreshLocalStorage

    // setCurrentUserStorage(updatedCurrentUser);
    // setUsersStorage(updatedUserFullDataForStorage);

    dispatch(updateCurrentUserBasket(fullProductData));
    dispatch(
      updateUsersBasket({
        products: fullProductData,
        id: currentUser.id,
      })
    );
  }

  return { handleAddToBasket };
}
