import { Box, Typography } from "@mui/material";

export function Poster() {
  return (
    <Box component="section" position="relative">
      <Typography
        variant="h1"
        position="absolute"
        top="150px"
        left="calc(50% - 250px);"
      >
        Spark store
      </Typography>

      <img
        style={{ width: "100%", height: "400px" }}
        src="../../../assets/poster3.jpg"
      ></img>
    </Box>
  );
}
