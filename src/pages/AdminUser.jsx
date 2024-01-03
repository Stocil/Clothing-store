import { Box, Typography } from "@mui/material";

export function AdminUser() {
  return (
    <Box sx={{ display: "flex", gap: "50px" }}>
      <img
        className="user__avatar"
        src="https://pichold.ru/wp-content/uploads/2018/11/c24f98eba82666ae547b138be9933bd1.jpg"
      />
      <Box>
        <Typography variant="h3"> name: Admin </Typography>
        <Typography variant="body1"> id: 0</Typography>
      </Box>
    </Box>
  );
}
