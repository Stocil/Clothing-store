import { Box, Stack, styled } from "@mui/material";

export const HeaderInner = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const HeaderColoredTitle = styled(Box)(({ theme }) => ({
  display: "inline",
  color: theme.palette.primary.dark,
}));
