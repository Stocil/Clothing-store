import { Button, styled } from "@mui/material";

export const AddButton = ({ children, color, onClick, theme = "light" }) => {
  const StyledAddButton = styled(Button)({
    textTransform: "none",
    fontWeight: "700",
    fontSize: "16px",
  });

  return (
    <StyledAddButton
      variant={theme === "dark" ? "gradient-dark" : "gradient-light"}
      size="large"
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledAddButton>
  );
};
