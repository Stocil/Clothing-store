import { useDispatch } from "react-redux";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { updateUser, updateUserInUsers } from "../../../store/actions";

export function useUserpageForm(changeUsernameError) {
  const dispatch = useDispatch();

  const {
    setStorageItem: setCurrentUserStorage,
    getStorageItem: getCurrentUser,
  } = useLocalStorage("currentUser");

  const { setStorageItem: setUsersStorage, getStorageItem: getUsers } =
    useLocalStorage("users");

  const users = getUsers()[0] ? getUsers() : [];
  const usersUsernames = users.map((user) => user.name);
  const currentUser = getCurrentUser();

  function handleSubmitForm(e) {
    e.preventDefault();

    let canSubmit = true;
    const form = e.target;
    const currentUserFullData = users.filter((user) => {
      if (user.name === currentUser.name) {
        return user;
      }
    })[0];

    changeUsernameError(false);

    if (
      usersUsernames.includes(form.Name.value) &&
      form.Name.value !== currentUser.name
    ) {
      changeUsernameError("The username is already taken");
      canSubmit = false;
    }

    if (canSubmit) {
      const updatedCurrentUser = {
        name: form.Name.value,
        email: form.Email.value,
        avatarUrl: form.Avatar.value ? form.Avatar.value : null,
        id: currentUser.id,
      };

      const updatedUserFullData = {
        name: form.Name.value,
        email: form.Email.value,
        avatarUrl: form.Avatar.value ? form.Avatar.value : null,
        id: currentUser.id,
        password: currentUserFullData.password,
      };

      const updatedUserFullDataForStorage = users.map((user) => {
        if (user.id === updatedUserFullData.id) {
          return {
            ...user,
            name: updatedUserFullData.name,
            email: updatedUserFullData.email,
            avatarUrl: updatedUserFullData.avatarUrl,
          };
        }

        return user;
      });

      setCurrentUserStorage(updatedCurrentUser);
      setUsersStorage(updatedUserFullDataForStorage);

      dispatch(updateUser(updatedCurrentUser));
      dispatch(updateUserInUsers(updatedUserFullData));
    }
  }

  return handleSubmitForm;
}
