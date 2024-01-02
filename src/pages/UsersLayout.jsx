import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { deleteUser } from "../store/actions";

export function UsersLayout() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const userList = users.map((user) => {
    return (
      <div className="users__item" key={uuidv4()}>
        <p>{user.name}</p>
        <button onClick={() => handleDeleteUser(user.id)}>Delete user</button>
        <button>
          <Link to={`${user.id}`}>Посмотреть страницу</Link>
        </button>
      </div>
    );
  });

  return (
    <>
      <Outlet />
      <div className="users__list container">{userList}</div>
    </>
  );

  function handleDeleteUser(id) {
    dispatch(deleteUser(id));
  }
}
