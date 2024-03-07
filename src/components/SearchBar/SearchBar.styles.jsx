import { InputBase, Paper, Typography, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "22ch",
      },
    },
  },
}));

export function SearchBarInput({ onChange, value, toggleOpenSearchRes }) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => toggleOpenSearchRes(true)}
        onBlur={() => setTimeout(() => toggleOpenSearchRes(false), 100)}
        placeholder="Search for anything..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

export const SearchBarResults = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  position: "absolute",
  marginLeft: "5px",
  backgroundColor: "main",
  padding: "10px",
});

export const SearchBarResultsWrapper = styled(Paper)({
  padding: 8,
  display: "flex",
  gap: 8,
  width: "100%",
});

export const SearchBarResultText = styled(Typography)({
  fontWeight: "700",
  width: "250px",
});
