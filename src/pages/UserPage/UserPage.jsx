import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions";

export function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  const userAvatar = user.avatarUrl
    ? user.avatarUrl
    : "../../assets/defAvatar.svg";

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      <Stack direction="row" gap={20}>
        <img className="user__avatar" src={userAvatar}></img>

        <Stack gap={3}>
          <Typography variant="h2">{user.name}</Typography>

          <Typography variant="h5" component="p">
            Email: {user.email}
          </Typography>

          <Typography variant="h5" component="p">
            Avatar url: {user.avatarUrl ? userAvatar : "none"}
          </Typography>

          <Button variant="contained">Edit</Button>
        </Stack>
      </Stack>

      <Button
        variant="contained"
        onClick={handleLogOut}
        color="error"
        sx={{ mt: 10 }}
      >
        Log out
      </Button>
    </Container>
  );

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }
}
