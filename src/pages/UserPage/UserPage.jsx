import { Button, Container, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../../store/actions";
import { SubmitButton } from "../AccountManager/AccountManager.styles";
import { useUserpageForm } from "./hooks/useUserpageForm";
import { useState } from "react";
import { UserpageModal } from "../../components/UserpageModal/UserpageModal";

export function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  const userAvatar = user.avatarUrl
    ? user.avatarUrl
    : "../../assets/defAvatar.svg";
  const [usernameHelperText, setUsernameHelperText] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { handleSubmitForm, handleSubmitNewPassword } = useUserpageForm(
    setUsernameHelperText
  );

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      <Stack direction="row" gap={20}>
        <img className="user__avatar" src={userAvatar}></img>

        <form className="user__form" onSubmit={handleSubmitForm}>
          <TextField
            name={"Name"}
            id={"name"}
            label={"Name: "}
            variant="standard"
            color="secondary"
            required
            fullWidth
            inputProps={{ style: { fontSize: "26px" } }}
            defaultValue={user.name}
            error={!!usernameHelperText}
            helperText={usernameHelperText}
          />

          <TextField
            type="email"
            name={"Email"}
            id={"email"}
            label={"Email: "}
            variant="standard"
            color="secondary"
            fullWidth
            required
            inputProps={{ style: { fontSize: "26px" } }}
            defaultValue={user.email}
          />

          <TextField
            name={"Avatar"}
            id={"avatar"}
            label={"Avatar url: "}
            variant="standard"
            color="secondary"
            fullWidth
            inputProps={{ style: { fontSize: "26px" } }}
            defaultValue={user.avatarUrl}
          />

          <Stack spacing={2}>
            <SubmitButton>Save</SubmitButton>

            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={handleCloseModal}
            >
              Change Password
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={handleLogOut}
              sx={{ textTransform: "none" }}
            >
              Log out
            </Button>
          </Stack>
        </form>
      </Stack>

      <UserpageModal
        isOpen={modalOpen}
        handleClose={() => handleCloseModal()}
        onSubmit={handleSubmitNewPassword}
      />
    </Container>
  );

  function handleLogOut() {
    localStorage.removeItem("currentUser");
    dispatch(logoutUser());
  }

  function handleCloseModal() {
    setModalOpen((t) => !t);
  }
}
