import {
  updateCurrentUserRecentProducts,
  updateUsersRecentProducts,
} from "../store/actions/index.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useUpdateRecentProducts(id) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (!id || !currentUser.id) return;

    dispatch(updateCurrentUserRecentProducts(id));
    dispatch(
      updateUsersRecentProducts({
        id: currentUser.id,
        productId: id,
      })
    );
  }, [dispatch, id, currentUser.id]);
}
