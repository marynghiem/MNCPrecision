import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ContactUs } from "./components/ContactUs";
import { Equipment } from "./components/Equipment";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { QualityControl } from "./components/QualityControl";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QualityControl" element={<QualityControl />} />
        <Route path="/Equipment" element={<Equipment />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
