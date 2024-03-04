import { Box, Typography } from "@mui/material";

export function Poster() {
  return (
    <Box component="section" position="relative">
      <Typography
        variant="h1"
        position="absolute"
        sx={{ transform: { xs: "translateX(-50%)", sm: "none" } }}
        top={{ xs: "240px", sm: "150px" }}
        left={{ xs: "55%", sm: "calc(50% - 250px)" }}
        fontSize={{ xs: "4rem", ss: "5rem", sm: "6rem" }}
      >
        Spark store
      </Typography>

      <img
        style={{ width: "100%", height: "400px" }}
        src="../../../assets/bg1.png"
      ></img>
    </Box>
  );
}
