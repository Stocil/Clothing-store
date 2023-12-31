import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNewUser } from "../../store/actions";

export function Users() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <p> Список пользователей:</p>

      <button className="users__button" onClick={() => handleAddUser(prompt())}>
        Добавить пользователя
      </button>
    </div>
  );

  function handleAddUser(name) {
    if (!name) return;

    const newUser = {
      id: uuidv4(),
      name: name,
    };

    dispatch(addNewUser(newUser));
  }
}
