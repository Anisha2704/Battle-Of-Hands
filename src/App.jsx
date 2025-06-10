import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import OnePlayer from "./OnePlayer";
import TwoPlayer from "./TwoPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one-player" element={<OnePlayer />} />
        <Route path="/two-player" element={<TwoPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
