import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export function Category() {
  const location = useLocation().pathname;

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      <Typography variant="h1">{location}</Typography>
    </Container>
  );
}
