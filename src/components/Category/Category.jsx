import { Container, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export function Category() {
  const location = useLocation();

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      <Typography variant="h1">{location.pathname}</Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ mt: "100px" }}
      >
        <img
          src={location.state.category.image}
          style={{ width: "300px", height: "300px" }}
        ></img>

        <img
          src={location.state.category.image}
          style={{ width: "300px", height: "300px" }}
        ></img>

        <img
          src={location.state.category.image}
          style={{ width: "300px", height: "300px" }}
        ></img>
      </Stack>
    </Container>
  );
}
