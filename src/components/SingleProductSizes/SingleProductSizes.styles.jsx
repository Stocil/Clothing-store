import { Button, styled } from "@mui/material";

export const SizeButton = ({ theme, onClick, selected, children }) => {
  const color = selected ? "secondary" : "primary";
  const variant = theme === "dark" ? "gradient-dark" : "gradient-light";

  const StyledSizeButton = styled(Button)({
    minWidth: "40px",
    fontSize: "16px",
  });

  return (
    <StyledSizeButton
      color={color}
      size="small"
      variant={selected ? variant : "contained"}
      onClick={onClick}
    >
      {children}
    </StyledSizeButton>
  );
};
