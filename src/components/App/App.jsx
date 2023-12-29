import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  increaseScore,
  decreaseScore,
  addNewUser,
  deleteUser,
} from "../../store/actions";

function App() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const users = useSelector((state) => state.users);

  const userList = users.map((user) => {
    return (
      <div style={{ display: "flex", gap: "10px" }} key={uuidv4()}>
        <p>{user.name}</p>
        <button onClick={() => handleDeleteUser(user.id)}>Delete user</button>
      </div>
    );
  });

  function onIncrease(n) {
    dispatch(increaseScore(n));
  }

  function onDecrease(n) {
    dispatch(decreaseScore(n));
  }

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

  return (
    <div style={{ margin: "100px" }}>
      <div className="score__inner">
        <p> {score.score} </p>
        <p> </p>
        <button onClick={() => onIncrease(5)}>Увеличить</button>
        <button onClick={() => onDecrease(5)}>Уменьшить</button>
      </div>

      <div className="users__inner" style={{ marginTop: "50px" }}>
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
    </div>
  );
}

export default App;
