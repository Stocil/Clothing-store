import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Container, Stack, Toolbar, Typography, Divider } from "@mui/material";

export function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction={"row"}
            spacing={3}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <CustomLink to="/" className="header__link">
              Home
            </CustomLink>
            <CustomLink to="/score" className="header__link">
              Score
            </CustomLink>
            <CustomLink to="/users" className="header__link">
              Users
            </CustomLink>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

// eslint-disable-next-line react/prop-types
function CustomLink({ to, children }) {
  // Add active class depends on where you locate, same as NavLink

  // const resolvedPath = useResolvedPath(to);
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  // const className = isActive ? "header__link active" : "header__link";

  return (
    <NavLink className="header__link" to={to}>
      <Typography variant="h5" component="p">
        {children}
      </Typography>
    </NavLink>
  );
}
