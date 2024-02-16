import { Button, IconButton, Paper, Typography, styled } from "@mui/material";

export const SizeButton = ({ onClick, selected, children }) => {
  const color = selected ? "secondary" : "primary";

  const StyledSizeButton = styled(Button)({
    minWidth: "40px",
    fontSize: "16px",
  });

  return (
    <StyledSizeButton
      color={color}
      size="small"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </StyledSizeButton>
  );
};

export const TransparentText = styled(Typography)({
  opacity: 0.5,
});

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

export const AddButton = ({ children, color, onClick }) => {
  const StyledAddButton = styled(Button)({
    textTransform: "none",
    fontWeight: "700",
    fontSize: "16px",
  });

  return (
    <StyledAddButton
      variant="contained"
      size="large"
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledAddButton>
  );
};

export const GoBackButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: " 64px",
  right: "calc(100% - 5px)",
  backgroundColor: theme.palette.secondary.main,
  ":hover": { backgroundColor: theme.palette.primary.dark },
  transition: `all 300ms ${theme.transitions.easing.easeInOut}`,
}));
