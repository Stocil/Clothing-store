import { Button, styled } from "@mui/material";

const AddUserButtonComponent = styled(Button)(() => ({
  marginTop: "21px",
}));

export default function AddUserButton({ children, onClick }) {
  return (
    <AddUserButtonComponent variant="outlined" onClick={onClick}>
      {children}
    </AddUserButtonComponent>
  );
}
