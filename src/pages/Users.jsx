import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNewUser, deleteUser } from "../store/actions";

export function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const userList = users.map((user) => {
    return (
      <div style={{ display: "flex", gap: "10px" }} key={uuidv4()}>
        <p>{user.name}</p>
        <button onClick={() => handleDeleteUser(user.id)}>Delete user</button>
      </div>
    );
  });

  return (
    <div
      className="users__inner"
      style={{ marginTop: "50px", marginLeft: "100px" }}
    >
      <button
        style={{ marginBottom: "20px" }}
        onClick={() => handleAddUser(prompt())}
      >
        Добавить пользователя
      </button>
      <div
        className="user__list"
        style={{ display: "flex", flexDirection: "column", gap: "7px" }}
      >
        {userList}
      </div>
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

  function handleDeleteUser(id) {
    dispatch(deleteUser(id));
  }
}
