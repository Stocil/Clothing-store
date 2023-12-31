import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function UserNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/users");
    }, 3000);
  }, [navigate]);

  return (
    <h1 className="container">
      Такого пользователя не существет, перенаправление на страницу
      пользователей...
    </h1>
  );
}
