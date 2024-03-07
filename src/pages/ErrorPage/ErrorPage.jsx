import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ErrorInner,
  ErrorNumbers,
  ErrorNumbersInner,
  ErrorTitle,
} from "./ErrorPage.styles";

export function ErrorPage() {
  return (
    <Container sx={{ pt: { xs: 0, sm: 8 } }}>
      <ErrorInner>
        <ErrorTitle variant="h2">The page was not found</ErrorTitle>

        <ErrorNumbersInner>
          <ErrorNumbers className="error__numbers">4</ErrorNumbers>
          <ErrorNumbers className="error__numbers">0</ErrorNumbers>
          <ErrorNumbers className="error__numbers">4</ErrorNumbers>
        </ErrorNumbersInner>

        <Link to="/">
          <Button variant="gradient-dark" sx={{ fontSize: "24px" }}>
            Home
          </Button>
        </Link>
      </ErrorInner>
    </Container>
  );
}
