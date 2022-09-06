import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import DetailMovie from "./pages/DetailMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
