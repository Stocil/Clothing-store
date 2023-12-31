import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function User() {
  const { id: currentId } = useParams();

  const user = useSelector((state) => state.users).filter(
    (user) => user.id === currentId
  );

  if (!user[0]) {
    return <h1 className="container">Пользователя не существет</h1>;
  }

  return (
    <div className="container">
      <div className="user__inner">
        <img
          className="user__avatar"
          src="https://i.pinimg.com/originals/a4/2e/6b/a42e6b4231e827bafa73c678a43f319e.jpg"
        />
        <div className="user__info">
          <h2 className="user__name"> name: {user[0].name}</h2>
          <h3 className="user__id"> id: {user[0].id}</h3>
        </div>
      </div>

      <p className="user__other-users">Все пользователи:</p>
    </div>
  );
}
