import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "../../pages/Homepage";
import { Score } from "../../pages/Score";
import { Users } from "../../pages/Users";
import { NotFoundPage } from "../../pages/NotFoundPage";

function App() {
  return (
    <div>
      <header
        style={{
          display: "flex",
          margin: "100px",
          gap: "30px",
        }}
      >
        <Link
          to="/"
          style={{
            padding: "15px 10px",
            border: "1px solid black",
            borderRadius: "25px",
          }}
        >
          Home
        </Link>
        <Link
          to="/score"
          style={{
            padding: "15px 10px",
            border: "1px solid black",
            borderRadius: "25px",
          }}
        >
          Score
        </Link>
        <Link
          to="/users"
          style={{
            padding: "15px 10px",
            border: "1px solid black",
            borderRadius: "25px",
          }}
        >
          Users
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/score" element={<Score />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
