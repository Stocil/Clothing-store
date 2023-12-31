export function AdminUser() {
  return (
    <div className="container">
      <div className="user__inner">
        <img
          className="user__avatar"
          src="https://pichold.ru/wp-content/uploads/2018/11/c24f98eba82666ae547b138be9933bd1.jpg"
        />
        <div className="user__info">
          <h2 className="user__name"> name: Admin</h2>
          <h3 className="user__id"> id: 0</h3>
        </div>
      </div>
    </div>
  );
}
