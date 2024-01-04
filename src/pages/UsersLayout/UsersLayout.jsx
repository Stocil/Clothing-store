import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Container, ListItemText, Stack } from "@mui/material";

import { deleteUser } from "../../store/actions";
import { Snack } from "../../components/Snack/Snack";
import { UserButton, UserItem, UserList } from "./UsersLayout.styles";

export function UsersLayout() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [isOpen, setIsOpen] = useState(false);

  const userList = users.map((user) => {
    return (
      <UserItem key={uuidv4()}>
        <ListItemText>{user.name}</ListItemText>
        <Stack direction={"row"} spacing={2}>
          <UserButton onClick={() => handleDeleteUser(user.id)}>
            Удалить
          </UserButton>

          <UserButton>
            <Link to={`${user.id}`}>Посмотреть страницу</Link>
          </UserButton>
        </Stack>
      </UserItem>
    );
  });

  return (
    <Container maxWidth="xl" sx={{ my: 3 }}>
      <Outlet context={handleOpenSnack} />

      <UserList>{userList}</UserList>

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
