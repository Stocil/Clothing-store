import { Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../../store/asyncActions/products";

export function Category() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const isError = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getCategoryProducts(id));
  }, [dispatch, id]);

  const productsList = products.map((product) => {
    return (
      <Grid key={product.id} item xs={1} display="flex">
        <Paper sx={{ padding: "20px" }}>
          <img
            style={{ maxHeight: "320px", borderRadius: "20px" }}
            src={product.images[0]}
          />

          <Typography variant="h6" component="p">
            {product.price}
          </Typography>

          <Typography variant="h6" component="p">
            {product.title}
          </Typography>
        </Paper>
      </Grid>
    );
  });

  const renderContent = () => {
    let content;

    if (isError) {
      content = (
        <Typography mt={10} variant="h3">
          {isError}
        </Typography>
      );
    } else {
      content = productsList;
    }

    return (
      <Grid container spacing={5} columns={3}>
        {content}
      </Grid>
    );
  };

  return (
    <Container component={"section"} maxWidth="lg" sx={{ my: 7 }}>
      <Grid container spacing={5} columns={3}>
        {productsList}
      </Grid>

      {isLoading ? (
        <Typography variant="h5" fontWeight={700}>
          Loading...
        </Typography>
      ) : (
        renderContent()
      )}
    </Container>
  );
}
