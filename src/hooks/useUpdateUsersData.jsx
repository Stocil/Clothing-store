import {
  updateCurrentUserRecentProducts,
  updateUsersRecentProducts,
} from "../store/actions/index.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "./useLocalStorage.jsx";

export function useUpdateUsersData() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.oneProduct);

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

    const updatedCurrentUser = {
      name: currentUser.name,
      email: currentUser.email,
      avatarUrl: currentUser.avatarUrl,
      id: currentUser.id,
      recentProducts: [...currentUser.recentProducts, product.id],
    };

    const updatedUserFullData = {
      name: currentUser.name,
      email: currentUser.email,
      avatarUrl: currentUser.avatarUrl,
      id: currentUser.id,
      password: currentUserFullData.password,
      recentProducts: [...currentUser.recentProducts, product.id],
    };

    const updatedUserFullDataForStorage = users.map((user) => {
      if (user.id === updatedUserFullData.id) {
        return {
          ...user,
          name: updatedUserFullData.name,
          email: updatedUserFullData.email,
          avatarUrl: updatedUserFullData.avatarUrl,
          recentProducts: updatedUserFullData.recentProducts,
        };
      }

      return user;
    });

    setCurrentUserStorage(updatedCurrentUser);
    setUsersStorage(updatedUserFullDataForStorage);
  }

  // useEffect(() => {
  //   if (!product.id || !currentUser.id) return;

  //   dispatch(updateCurrentUserRecentProducts(product.id));
  //   dispatch(
  //     updateUsersRecentProducts({
  //       id: currentUser.id,
  //       productId: product.id,
  //     })
  //   );
  // }, [dispatch, product.id, currentUser.id]);
}
