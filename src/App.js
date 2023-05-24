import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { QualityControl } from "./components/QualityControl";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QualityControl" element={<QualityControl />} />
      </Routes>
    </div>
  );
}

export default App;
