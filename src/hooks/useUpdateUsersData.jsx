import {
  updateCurrentUserRecentProducts,
  updateUsersRecentProducts,
} from "../store/actions/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "./useLocalStorage.jsx";

export function useUpdateUsersData(
  {
    name = null,
    email = null,
    avatarUrl = null,
    password = null,
    recentProducts = null,
  },
  id = null
) {
  const dispatch = useDispatch();

  const {
    setStorageItem: setCurrentUserStorage,
    getStorageItem: getCurrentUser,
  } = useLocalStorage("currentUser");

  const { setStorageItem: setUsersStorage, getStorageItem: getUsers } =
    useLocalStorage("users");

  const currentUser = getCurrentUser();

  if (currentUser.id) {
    const users = getUsers()[0] ? getUsers() : [];
    const currentUserFullData = users.filter((user) => {
      if (user.name === currentUser.name) {
        return user;
      }
    })[0];

    let newRecentProducts = currentUser.recentProducts;

    if (currentUser.recentProducts.includes(recentProducts)) {
      newRecentProducts = newRecentProducts.filter(
        (product) => product !== recentProducts
      );
    } else {
      newRecentProducts = currentUser.recentProducts;
    }

    newRecentProducts.unshift(recentProducts);

    const recentProductForStorage = recentProducts
      ? newRecentProducts
      : currentUser.recentProducts.filter((product) => {
          if (product) {
            return product;
          }
        });

    const updatedCurrentUser = {
      name: name ? name : currentUser.name,
      email: email ? email : currentUser.email,
      avatarUrl: avatarUrl ? avatarUrl : currentUser.avatarUrl,
      id: currentUser.id,
      recentProducts: recentProductForStorage,
    };

    const updatedUserFullData = {
      name: updatedCurrentUser.name,
      email: updatedCurrentUser.email,
      avatarUrl: updatedCurrentUser.avatarUrl,
      id: updatedCurrentUser.id,
      password: password ? password : currentUserFullData.password,
      recentProducts: updatedCurrentUser.recentProducts,
    };

    const updatedUserFullDataForStorage = users.map((user) => {
      if (user.id === updatedUserFullData.id) {
        return {
          ...user,
          name: updatedUserFullData.name,
          email: updatedUserFullData.email,
          avatarUrl: updatedUserFullData.avatarUrl,
          password: updatedUserFullData.password,
          recentProducts: updatedUserFullData.recentProducts,
        };
      }

      return user;
    });

    setCurrentUserStorage(updatedCurrentUser);
    setUsersStorage(updatedUserFullDataForStorage);
  }

  useEffect(() => {
    if (!recentProducts) return;
    if (!id || !currentUser.id) return;

    dispatch(updateCurrentUserRecentProducts(recentProducts));
    dispatch(
      updateUsersRecentProducts({
        id: currentUser.id,
        productId: recentProducts,
      })
    );
  }, [dispatch, id, currentUser.id, recentProducts]);
}
