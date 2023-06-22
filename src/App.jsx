import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Experience from "./pages/Experience";
import Completed from "./pages/Completed";
import GlobalStyle from "./styled-components/GlobalStyled";
function App() {
  return (
    <>
      <GlobalStyle />
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
