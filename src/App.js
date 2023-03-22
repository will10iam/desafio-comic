import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Testes from "./Pages/Testes";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testes" element={<Testes />} />
      </Routes>

    </div>
  );
}

export default App;
