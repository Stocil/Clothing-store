import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ErrorNumbers } from "./ErrorPage.styles";

export function ErrorPage() {
  return (
    <Container sx={{ pt: 8 }}>
      <Stack alignItems="center" gap={5}>
        <Typography
          variant="h2"
          sx={{ mt: 5, textAlign: "center", fontWeight: "700" }}
        >
          The page was not found
        </Typography>

        <Stack direction="row" justifyContent="center" spacing={12}>
          <ErrorNumbers className="error__numbers">4</ErrorNumbers>
          <ErrorNumbers className="error__numbers">0</ErrorNumbers>
          <ErrorNumbers className="error__numbers">4</ErrorNumbers>
        </Stack>

        <Link to="/">
          <Button color="secondary" sx={{ fontSize: "24px" }}>
            Home
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
