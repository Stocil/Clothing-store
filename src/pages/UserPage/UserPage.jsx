import { Button, Container, Stack, TextField } from "@mui/material";
import { useUserpageForm } from "./hooks/useUserpageForm";
import { useState } from "react";
import { UserpageModal } from "../../components/UserpageModal/UserpageModal";

import { useUserpage } from "./hooks/useUserpage";
import { SubmitButton } from "../AccountManager/AccountManager.styles";
import { ProductSectionInner } from "../../components/Uikit/ProductSectionInner";
import { Products } from "../../components/Products/Products";

export function UserPage() {
  const [usernameHelperText, setUsernameHelperText] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { handleSubmitForm, handleSubmitNewPassword } = useUserpageForm(
    setUsernameHelperText
  );
  const {
    user,
    userAvatar,
    handleLogOut,
    handleToggleModal,
    productsData,
    recentProductsPage,
    recentProductsMaxPage,
    handleChangeRecentProductsPage,
  } = useUserpage(setModalOpen);

  return (
    <Container sx={{ my: 7, pt: 8 }}>
      <Stack direction="row" justifyContent="space-between">
        <img className="user__avatar" src={userAvatar}></img>

        <form className="user__form" onSubmit={handleSubmitForm}>
          <TextField
            name={"Name"}
            id={"name"}
            label={"Name: "}
            variant="standard"
            color="secondary"
            required
            fullWidth
            inputProps={{ style: { fontSize: "26px" } }}
            defaultValue={user.name}
            error={!!usernameHelperText}
            helperText={usernameHelperText}
          />

          <TextField
            type="email"
            name={"Email"}
            id={"email"}
            label={"Email: "}
            variant="standard"
            color="secondary"
            fullWidth
            required
            inputProps={{ style: { fontSize: "26px" } }}
            defaultValue={user.email}
          />

          <TextField
            name={"Avatar"}
            id={"avatar"}
            label={"Avatar url: "}
            variant="standard"
            color="secondary"
            fullWidth
            inputProps={{ style: { fontSize: "26px" } }}
            defaultValue={user.avatarUrl}
          />

          <Stack spacing={2}>
            <SubmitButton>Save</SubmitButton>

            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={handleToggleModal}
            >
              Change Password
            </Button>

            <Button
              size="large"
              variant="contained"
              color="error"
              onClick={handleLogOut}
              sx={{ textTransform: "none" }}
            >
              Log out
            </Button>
          </Stack>
        </form>
      </Stack>

      <ProductSectionInner variant="outlined" sx={{ mt: 7 }}>
        <Products
          products={productsData.products}
          isError={productsData.isError}
          isLoading={productsData.isLoading}
          maxProduct={recentProductsPage * 3}
          mt={1}
          title={"Last viewed"}
          errorJustify="center"
        />

        {recentProductsPage < recentProductsMaxPage ? (
          <Button color="secondary" onClick={handleChangeRecentProductsPage}>
            {" "}
            See more{" "}
          </Button>
        ) : null}
      </ProductSectionInner>

      <UserpageModal
        isOpen={modalOpen}
        handleClose={() => handleToggleModal()}
        onSubmit={handleSubmitNewPassword}
      />
    </Container>
  );
}
