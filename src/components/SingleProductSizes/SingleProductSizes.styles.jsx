import { Button, styled } from "@mui/material";

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
