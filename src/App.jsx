import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Personal from "./pages/personal";
import Experience from "./pages/experience";
import Completed from "./pages/Completed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
