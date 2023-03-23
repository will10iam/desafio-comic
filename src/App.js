import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Testes from "./Pages/Tests";
import Comics from "./Pages/Comics"

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Testes />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>

    </div>
  );
}

export default App;
