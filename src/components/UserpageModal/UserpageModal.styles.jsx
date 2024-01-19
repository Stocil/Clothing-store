import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
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

export const ModalInner = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",

  backgroundColor: theme.palette.background.paper,
  borderColor: "erorr",
  borderRadius: 32,
  padding: 32,

  alignItems: "center",
  justifyContent: "space-between",
  gap: 40,
}));
