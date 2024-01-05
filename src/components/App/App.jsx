// import { Routes, Route } from "react-router-dom";

import { Header } from "../Header/Header";

function App() {
  return (
    <>
      <Header />

      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/score" element={<Score />} />

        <Route path="/users" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User />} />
          <Route path="admin" element={<AdminUser />} />
          <Route path="not-found" element={<UserNotFound />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
    </>
  );
}

export default App;
