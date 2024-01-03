import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { deleteUser } from "../store/actions";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import { Snack } from "../components/Snack/Snack";
import { useState } from "react";
import { deepPurple } from "@mui/material/colors";

export function UsersLayout() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [isOpen, setIsOpen] = useState(false);

  const userList = users.map((user) => {
    return (
      <ListItem
        disablePadding
        key={uuidv4()}
        sx={{
          padding: "10px 18px",
          maxWidth: "800px",
          bgcolor: deepPurple[300],
          borderRadius: "20px",
        }}
      >
        <ListItemText>{user.name}</ListItemText>
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="outlined"
            sx={{
              bgcolor: "primary.main",
              color: "black",
              ":hover": {
                bgcolor: "primary.dark",
                color: "white",
              },
            }}
            onClick={() => handleDeleteUser(user.id)}
          >
            Удалить
          </Button>
          <Button
            variant="outlined"
            sx={{
              height: "35px",
              bgcolor: "primary.main",
              color: "black",
              ":hover": {
                bgcolor: "primary.dark",
                color: "white",
              },
            }}
          >
            <Link to={`${user.id}`}>Посмотреть страницу</Link>
          </Button>
        </Stack>
      </ListItem>
    );
  });

  return (
    <Container maxWidth="xl" sx={{ my: 3 }}>
      <Outlet context={handleOpenSnack} />

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          mt: "30px",
        }}
      >
        {userList}
      </List>

      <Snack isOpen={isOpen} handleCloseSnack={() => setIsOpen(false)} />
    </Container>
  );

  function handleDeleteUser(id) {
    dispatch(deleteUser(id));
  }

  function handleOpenSnack() {
    setIsOpen(true);
  }
}
