import { Stack, styled } from "@mui/material";

export const UserInfoWrapper = styled(Stack)(({ theme }) => ({
  justifyContent: "space-between",
  flexDirection: "row",

  [theme.breakpoints.down("big")]: {
    flexDirection: "column",
    alignItems: "start",
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));
