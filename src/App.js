import { Routes, Route } from "react-router-dom";
/* import Home from "./Pages/HomeTeste"; */
import Testes from "./Pages/Tests";
import Home from "./Pages/Home"

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Testes />} />
      </Routes>

    </div>
  );
}

export default App;
