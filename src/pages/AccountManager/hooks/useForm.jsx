import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { useLocalStorage } from "../../../hooks/useLocalStorage";
import {
  registerUser,
  addUserInUsers,
  loginUser,
} from "../../../store/actions";

export function useForm(path, isPasswordError, changeHeplerText) {
  const { setStorageItem: setCurrentUser } = useLocalStorage("currentUser");
  const { setStorageItem: setUsers, getStorageItem: getUsers } =
    useLocalStorage("users");
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
          password: form.password.value,
          avatarUrl: null,
          id: uuidv4(),
        };

        // const userForStorage = [
        //   ...users,
        //   {
        //     name: form.userName.value,
        //     email: form.email.value,
        //     password: form.password.value,
        //     avatarUrl: null,
        //     id: uuidv4(),
        //   },
        // ];

        const currentUser = {
          name: form.userName.value,
          email: form.email.value,
          avatarUrl: null,
          id: uuidv4(),
        };

        setCurrentUser(currentUser);

        dispatch(registerUser(currentUser));
        dispatch(addUserInUsers(user));
      }

      if (path === "/sign-in") {
        const users = getUsers();
        let isLogged = false;

        users.map((user) => {
          if (
            user.name === form.userName.value &&
            user.password === form.password.value
          ) {
            isLogged = true;
          }
        });

        if (isLogged) {
          const currentUser = users.filter((user) => {
            if (user.name === form.userName.value) {
              return user;
            }
          })[0];

          const currentUserData = {
            name: currentUser.name,
            email: currentUser.email,
            avatarUrl: currentUser.avatarUrl,
            id: currentUser.id,
          };

          setCurrentUser(currentUserData);
          dispatch(loginUser(currentUser));
        } else {
          console.log("Your email or password is invalid");
        }
      }
    }
  }

  return handleSubmitForm;
}
