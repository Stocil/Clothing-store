import { Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
          <Typography
            className="error__numbers"
            sx={{ fontWeight: "700", fontSize: "300px" }}
            color={(theme) => theme.palette.primary.dark}
          >
            4
          </Typography>
          <Typography
            className="error__numbers"
            sx={{ fontWeight: "700", fontSize: "300px" }}
            color={(theme) => theme.palette.secondary.main}
          >
            0
          </Typography>
          <Typography
            color={(theme) => theme.palette.primary.dark}
            className="error__numbers"
            sx={{ fontWeight: "700", fontSize: "300px" }}
          >
            4
          </Typography>
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
