import { IconButton, Paper, Stack, Typography, styled } from "@mui/material";

export const ErrorTypography = ({ isError, children }) => {
  return (
    <Typography
      variant="h4"
      fontWeight={700}
      sx={
        isError
          ? {
              padding: "20px",
              border: "2px solid #d32f2f",
              borderRadius: "20px",
            }
          : {}
      }
    >
      {children}
    </Typography>
  );
};

export const CardInner = styled(Paper)({
  padding: "20px",
  display: "flex",
  gap: "32px",
});

export const GoBackButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: " 64px",
  right: "calc(100% - 5px)",
  backgroundColor: theme.palette.secondary.main,
  ":hover": { backgroundColor: theme.palette.primary.dark },
  transition: `all 300ms ${theme.transitions.easing.easeInOut}`,
}));

export const CardInfo = styled(Stack)({
  justifyContent: "space-between",
  flexGrow: 1,
});
