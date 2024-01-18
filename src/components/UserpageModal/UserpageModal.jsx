import { useState } from "react";
import { Button, Modal, Stack, Typography } from "@mui/material";
import { UiPasswordButton } from "../Uikit/UiPasswordButton";

import { BorderLinearProgress, ModalInner } from "./UserpageModal.styles";

export function UserpageModal({ isOpen, handleClose, onSubmit }) {
  const [editPasswordHelperText, setEditPasswordHelperText] = useState(false);
  const [isEditPasswordShow, setIsEditPasswordShow] = useState(false);

  const [stage, setStage] = useState(1);

  if (!isOpen) {
    return null;
  }

  const renderTitle = () => {
    if (stage === 1) return "Enter your account password";

    if (stage === 2) return "Enter new password";
  };

  const renderImage = () => {
    if (stage === 1) {
      return (
        <img
          src="../../../assets/password.png"
          className="user__password-image"
        ></img>
      );
    }

    return null;
  };

  const renderModalFields = () => {
    if (stage === 1) {
      return (
        <>
          <UiPasswordButton
            key="EditPassword"
            helperText={editPasswordHelperText}
            isShowPassword={isEditPasswordShow}
            handleShowPassword={() => setIsEditPasswordShow((show) => !show)}
            fieldName={"EditPassword"}
            label={"Enter Password"}
            id={"editPassword"}
          />

          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{ width: 0.5, alignSelf: "center", textTransform: "none" }}
          >
            Continue
          </Button>
        </>
      );
    }

    return (
      <>
        <UiPasswordButton
          key="NewPassword"
          helperText={editPasswordHelperText}
          isShowPassword={isEditPasswordShow}
          handleShowPassword={() => setIsEditPasswordShow((show) => !show)}
          fieldName={"NewPassword"}
          label={"Enter new Password"}
          id={"newPassword"}
        />

        <UiPasswordButton
          key="RepeatNewPassword"
          helperText={editPasswordHelperText}
          isShowPassword={isEditPasswordShow}
          handleShowPassword={() => setIsEditPasswordShow((show) => !show)}
          fieldName={"RepeatNewPassword"}
          label={"Repeat Password"}
          id={"repeatNewPassword"}
        />

        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ width: 0.5, alignSelf: "center", textTransform: "none" }}
        >
          Save
        </Button>
      </>
    );
  };

  return (
    <Modal
      sx={{
        backdropFilter: "blur(7px)",
      }}
      open={isOpen}
      onClose={() => handleCloseModal()}
    >
      <ModalInner>
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h6" component="h2" textAlign="center">
            {stage}/2
          </Typography>

          <BorderLinearProgress
            variant="determinate"
            value={stage === 1 ? 50 : 100}
            sx={{ width: "200px" }}
          />

          {renderImage()}

          <Typography variant="h4" component="h2" textAlign="center">
            {renderTitle()}
          </Typography>
        </Stack>

        <Stack spacing={5} alignItems="center">
          <form
            className="user__form"
            onSubmit={(e) =>
              onSubmit(
                e,
                stage,
                setStage,
                setEditPasswordHelperText,
                handleCloseModal
              )
            }
          >
            {renderModalFields()}
          </form>
        </Stack>
      </ModalInner>
    </Modal>
  );

  function handleCloseModal() {
    handleClose();
    setStage(1);
    setEditPasswordHelperText(false);
  }
}
