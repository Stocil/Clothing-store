import { FormControlLabel, FormGroup } from "@mui/material";
import { ThemeSwitchInput } from "./ThemeSwitch.styles";

export function ThemeSwitch({ onSwitch }) {
  return (
    <FormGroup sx={{ ml: 40 }}>
      <FormControlLabel
        control={
          <ThemeSwitchInput
            onChange={onSwitch}
            defaultChecked={
              JSON.parse(localStorage.getItem("theme")) === "dark"
            }
          />
        }
      />
    </FormGroup>
  );
}
