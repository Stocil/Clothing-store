import { useDispatch, useSelector } from "react-redux";
import { updateUser, updateUserInUsers } from "../../../store/actions";

export function useUserpageForm(changeUsernameError) {
  const dispatch = useDispatch();

  const isUsers = useSelector((state) => state.users);
  const users = isUsers[0] ? isUsers : [];
  const usersUsernames = users.map((user) => user.name);
  const currentUser = useSelector((state) => state.currentUser);
  const currentUserFullData = users.filter((user) => {
    if (user.name === currentUser.name) {
      return user;
    }
  })[0];

  function handleSubmitForm(e) {
    e.preventDefault();

    let canSubmit = true;
    const form = e.target;

    changeUsernameError(false);

    if (
      usersUsernames.includes(form.Name.value) &&
      form.Name.value !== currentUser.name
    ) {
      changeUsernameError("The username is already taken");
      canSubmit = false;
    }

    if (canSubmit) {
      const updatedUser = {
        name: form.Name.value,
        email: form.Email.value,
        avatarUrl: form.Avatar.value ? form.Avatar.value : null,
        id: currentUser.id,
      };

      dispatch(updateUser(updatedUser));
      dispatch(updateUserInUsers(updatedUser));
    }
  }

  // passwordEdit

  function handleSubmitNewPassword(
    e,
    stage,
    changeStage,
    changePasswordError,
    handleCloseModal
  ) {
    e.preventDefault();

    let canSubmit = true;
    const form = e.target;

    changePasswordError(false);

    if (stage === 1) {
      if (form.EditPassword.value === currentUserFullData.password) {
        changeStage(2);
        changePasswordError(false);
      } else {
        changePasswordError("Incorrect Password!");
      }
    }

    if (stage === 2) {
      if (form.NewPassword.value.length < 5) {
        changePasswordError("The password is too short");
        canSubmit = false;
      }

      if (form.NewPassword.value.length > 20) {
        changePasswordError("The password is too long");
        canSubmit = false;
      }

      if (form.NewPassword.value !== form.RepeatNewPassword.value) {
        changePasswordError("The passwords don't match");
        canSubmit = false;
      }

      if (
        canSubmit === true &&
        form.NewPassword.value === currentUserFullData.password
      ) {
        changePasswordError("The new password must not match the old one");
        canSubmit = false;
      }

      if (canSubmit) {
        const updatedUserFullData = {
          ...currentUserFullData,
          password: form.NewPassword.value,
        };

        dispatch(updateUserInUsers(updatedUserFullData));

        handleCloseModal();
      }
    }
  }

  return { handleSubmitForm, handleSubmitNewPassword };
}
