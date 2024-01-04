import { Button, List, ListItem, styled } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const CustomUserButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "black",
  ":hover": {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
}));

const CustomUserItem = styled(ListItem)(() => ({
  padding: "10px 18px",
  maxWidth: "800px",
  backgroundColor: deepPurple[300],
  borderRadius: "20px",
}));

export const UserList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: "30px",
}));

export function UserButton({ children, onClick }) {
  return (
    <CustomUserButton variant="outlined" onClick={onClick}>
      {children}
    </CustomUserButton>
  );
}

export function UserItem({ children }) {
  return <CustomUserItem disablePadding>{children}</CustomUserItem>;
}
