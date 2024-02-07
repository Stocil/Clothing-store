import { Outlet } from "react-router-dom";
import { Categories } from "../Categories/Categories";
import { Poster } from "../Poster/Poster";
import { Footer } from "../Footer/Footer";

export function HomepageLayout() {
  return (
    <>
      <Poster />
      <Categories />

      <Outlet />

      <Footer />
    </>
  );
}
