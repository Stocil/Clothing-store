import { useState } from "react";

function App() {
  const [count, setCount] = useState("stas");

  return (
    <div>
      <p> {count} </p>
      <button
        onClick={() => setCount((n) => (n === "stas" ? "другое" : "stas"))}
      >
        Сменить на другое
      </button>
    </div>
  );
}

export default App;
