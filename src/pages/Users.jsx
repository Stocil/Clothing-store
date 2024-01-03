import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNewUser } from "../store/actions";
import { Button, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";

export function Users() {
  const dispatch = useDispatch();
  const handleOpenSnack = useOutletContext();

  return (
    <>
      <Typography variant="h2" component={"h3"}>
        Список пользователей:
      </Typography>

      <Button
        variant="outlined"
        sx={{ mt: 1 }}
        onClick={() => handleAddUser(prompt())}
      >
        Добавить пользователя
      </Button>
    </>
  );

  function handleAddUser(name) {
    if (!name) return;

    const newUser = {
      id: uuidv4(),
      name: name,
    };

    dispatch(addNewUser(newUser));
    handleOpenSnack();
  }
}
