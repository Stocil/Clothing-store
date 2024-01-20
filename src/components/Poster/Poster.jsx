import { Box, Typography } from "@mui/material";

export function Poster() {
  return (
    <Box position="relative">
      <Typography variant="h1" position="absolute" top="150px" left="32%">
        Vikoletto store
      </Typography>

      <img
        style={{ width: "100%", height: "400px" }}
        src="../../../assets/poster3.jpg"
      ></img>
    </Box>
  );
}
