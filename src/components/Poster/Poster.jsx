import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export function Poster() {
  const theme = useSelector((state) => state.theme);

  return (
    <Box component="section" position="relative">
      <Typography
        variant="h1"
        position="absolute"
        sx={{ transform: { xs: "translateX(-50%)", sm: "none" } }}
        top={{ xs: "80px", sm: "150px" }}
        left={{ xs: "55%", sm: "calc(50% - 250px)" }}
        fontSize={{ xs: "5rem", sm: "6rem" }}
      >
        Spark store
      </Typography>

      {theme === "dark" ? (
        <img className="poster__image" src="/assets/bg1.png"></img>
      ) : (
        <img className="poster__image" src="/assets/poster_light.jpg" />
      )}
    </Box>
  );
}
