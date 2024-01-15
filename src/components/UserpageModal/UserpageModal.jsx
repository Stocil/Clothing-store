import { Button, Modal, Stack, Typography, styled } from "@mui/material";
import { UiPasswordButton } from "../Uikit/UiPasswordButton";
import { useState } from "react";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export function UserpageModal({ isOpen, handleClose }) {
  const [editPasswordHelperText, setEditPasswordHelperText] = useState(false);
  const [isEditPasswordShow, setIsEditPasswordShow] = useState(false);

  const [stage, setStage] = useState(1);

  if (!isOpen) {
    return null;
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,

    bgcolor: "background.paper",
    borderColor: "erorr",
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.primary.main
          : theme.palette.primary.dark,
    },
  }));

  return (
    <Modal
      sx={{
        backdropFilter: "blur(7px)",
      }}
      open={isOpen}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={style}
        alignItems="center"
        justifyContent={"space-between"}
        spacing={5}
      >
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h6" component="h2" textAlign="center">
            {stage}/2
          </Typography>

          <BorderLinearProgress
            variant="determinate"
            value={stage === 1 ? 50 : 100}
            sx={{ width: "200px" }}
          />

          <img
            src="../../../assets/password.png"
            className="user__password-image"
          ></img>

          <Typography variant="h4" component="h2" textAlign="center">
            Enter your account password
          </Typography>
        </Stack>

        <Stack spacing={5} alignItems="center">
          <form className="user__form">
            <UiPasswordButton
              helperText={editPasswordHelperText}
              isShowPassword={isEditPasswordShow}
              handleShowPassword={() => setIsEditPasswordShow((show) => !show)}
              fieldName={"EditPassword"}
              label={"Enter Password"}
              id={"editPassword"}
            />
          </form>

          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none", width: 0.5 }}
          >
            Сontinue
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
