import { Typography } from "@mui/material";
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
    <Typography variant="h3">
      Такого пользователя не существет, перенаправление на страницу
      пользователей...
    </Typography>
  );
}
