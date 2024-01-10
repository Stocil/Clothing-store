import { useDispatch } from "react-redux";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { addNewUser } from "../../../store/actions";

export function useForm(path, isPasswordError, changeHeplerText) {
  const { setStorageItem } = useLocalStorage("currentUser");
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    const form = e.target;
    let canSubmit = true;

    if (path === "/sign-in") {
      isPasswordError(false);

      if (form.password.value.length < 5) {
        isPasswordError(true);
        changeHeplerText("The password is too short");
        canSubmit = false;
      }
    }

    if (path === "/sign-up") {
      isPasswordError(false);

      if (form.password.value.length < 5) {
        isPasswordError(true);
        changeHeplerText("The password is too short");
        canSubmit = false;
      }

      if (form.password.value !== form.repeatPassword.value) {
        isPasswordError(true);
        changeHeplerText("The passwords don't match");
        canSubmit = false;
      }
    }

    if (canSubmit) {
      if (path === "/sign-up") {
        const user = {
          name: form.userName.value,
          email: form.email.value,
          avatarUrl: null,
        };

        setStorageItem(user);
        dispatch(addNewUser(user));
      }

      if (path === "/sign-in") {
        console.log("logged in");
      }
    }
  }

  return handleSubmitForm;
}
