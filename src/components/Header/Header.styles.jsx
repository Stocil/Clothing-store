import { Box, Stack, styled } from "@mui/material";

export const HeaderInner = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const HeaderTitleInner = styled(Box)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "40px",

  [theme.breakpoints.down("md")]: {
    marginTop: "50px",
    fontSize: "50px",
  },
}));

export const HeaderImageInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(1),
  alignItems: "center",

  [theme.breakpoints.down("big")]: {
    width: "40px",
  },
}));

export const HeaderColoredTitle = styled(Box)(({ theme }) => ({
  display: "inline",
  color: theme.palette.primary.dark,
}));

export const HeaderIconsInner = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(3),
}));
