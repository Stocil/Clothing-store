import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/actions";

export function useUserpage(setModalOpen) {
  const dispatch = useDispatch();

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }

  function handleCloseModal() {
    setModalOpen((t) => !t);
  }

  function handleSubmitModal() {
    handleClose();
    setStage(1);
    setEditPasswordHelperText(false);
  }

  return { handleLogOut, handleCloseModal, handleSubmitModal };
}
