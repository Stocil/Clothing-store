import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import {
  registerUser,
  addUserInUsers,
  loginUser,
} from "../../../store/actions";

export function useForm(
  path,
  pathToNavigate,
  changeHeplerText,
  changeSignError,
  changeUsernameError
) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isUsers = useSelector((state) => state.users);
  const users = isUsers[0] ? isUsers : [];
  const usersUsernames = users.map((user) => user.name);

  function handleSubmitForm(e) {
    e.preventDefault();
    const form = e.target;
    let canSubmit = true;

    if (path === "/sign-in") {
      changeHeplerText(false);
      changeSignError(false);
    }

    if (path === "/sign-up") {
      changeHeplerText(false);
      changeUsernameError(false);

      if (form.password.value.length < 5) {
        changeHeplerText("The password is too short");
        canSubmit = false;
      }

      if (form.password.value !== form.repeatPassword.value) {
        changeHeplerText("The passwords don't match");
        canSubmit = false;
      }

      if (usersUsernames.includes(form.userName.value)) {
        changeUsernameError("Username is already has taken");
        canSubmit = false;
      }
    }

    if (canSubmit) {
      if (path === "/sign-up") {
        const id = uuidv4();

        const user = {
          name: form.userName.value,
          email: form.email.value,
          password: form.password.value,
          avatarUrl: null,
          id: id,
        };

        dispatch(registerUser(user));
        dispatch(addUserInUsers(user));

        navigate(pathToNavigate, { replace: true });
      }

      if (path === "/sign-in") {
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

          dispatch(loginUser(currentUser));

          navigate(pathToNavigate, { replace: true });
        } else {
          changeSignError("Email or password is invalid");
        }
      }
    }
  }

  return handleSubmitForm;
}
