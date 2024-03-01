import { Button, styled } from "@mui/material";

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
