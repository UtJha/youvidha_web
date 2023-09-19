import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, NotFound } from "./components";
import "./styles/index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
