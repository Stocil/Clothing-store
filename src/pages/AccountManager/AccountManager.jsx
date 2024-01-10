import { useState } from "react";
import { Container, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

import { PasswordField, SubmitButton } from "./AccountManager.styles";
import { useForm } from "./hooks/useForm";

export function AccountManager() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState(false);

  const path = useLocation().pathname;
  const onSubmit = useForm(path, setIsPasswordError, setPasswordHelperText);

  const renderTitle = () => {
    if (path === "/sign-in") {
      return "Log In";
    }

    if (path === "/sign-up") {
      return "Create account";
    }
  };

  const renderButtonText = () => {
    if (path === "/sign-in") {
      return "Log In";
    }

    if (path === "/sign-up") {
      return "Create";
    }
  };

  const renderTip = () => {
    let text;
    let link;
    let linkText;

    if (path === "/sign-in") {
      text = "Don't have an account yet?";
      link = "/sign-up";
      linkText = "Sign Up";
    }

    if (path === "/sign-up") {
      text = "Already have an account?";
      link = "/sign-in";
      linkText = "Log in";
    }

    return (
      <Stack direction={"row"} justifyContent={"center"} mt={2}>
        <Typography
          variant="body2"
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {text}
          <Link className="form__link" to={link}>
            {linkText}
          </Link>
        </Typography>
      </Stack>
    );
  };

  const renderFields = () => {
    let fields;

    if (path === "/sign-in") {
      fields = [
        {
          name: "userName",
          id: "username",
          label: "Username",
          type: "text",
        },
        {
          name: "password",
          id: "password",
          label: "Password",
        },
      ];
    }

    if (path === "/sign-up") {
      fields = [
        {
          name: "userName",
          id: "username",
          label: "Username",
          type: "text",
        },
        {
          name: "email",
          id: "email",
          label: "Email Address",
          type: "email",
        },
        {
          name: "password",
          id: "password",
          label: "Password",
        },
        {
          name: "repeatPassword",
          id: "repeatPassword",
          label: "Repeat Password",
        },
      ];
    }

    return fields.map((field) => {
      if (field.name !== "password" && field.name !== "repeatPassword") {
        return (
          <TextField
            key={field.name}
            name={field.name}
            type={field.type}
            id={field.id}
            label={field.label}
            variant="outlined"
            color="secondary"
            required
            fullWidth
          />
        );
      }

      return (
        <PasswordField
          isError={isPasswordError}
          helperText={passwordHelperText}
          key={field.name}
          field={field}
          isShowPassword={isShowPassword}
          onClick={() => setIsShowPassword((show) => !show)}
        />
      );
    });
  };

  return (
    <Container component={"section"} sx={{ my: 12 }}>
      <Stack alignItems={"center"}>
        <Paper sx={{ p: 4, width: { sm: "450px" } }}>
          <Typography variant="h4" component={"h2"} textAlign={"center"}>
            {renderTitle()}
          </Typography>

          <form autoComplete="off" className="form" onSubmit={onSubmit}>
            {renderFields()}

            <SubmitButton>{renderButtonText()}</SubmitButton>
          </form>

          {renderTip()}
        </Paper>
      </Stack>
    </Container>
  );
}
