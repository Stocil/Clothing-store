import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export function User() {
  const { id: currentId } = useParams();

  const user = useSelector((state) => state.users).filter(
    (user) => user.id === currentId
  );

  if (!user[0]) {
    return <Navigate to="/users/not-found" />;
  }

  return (
    <Box>
      <Box sx={{ display: "flex", gap: "50px" }}>
        <img
          className="user__avatar"
          src="https://i.pinimg.com/originals/a4/2e/6b/a42e6b4231e827bafa73c678a43f319e.jpg"
        />
        <Box>
          <Typography variant="h3"> Имя: {user[0].name}</Typography>
          <Typography variant="body1"> id: {user[0].id}</Typography>
        </Box>
      </Box>

      <Typography variant="h4" sx={{ mt: 5 }}>
        Все пользователи:
      </Typography>
    </Box>
  );
}
