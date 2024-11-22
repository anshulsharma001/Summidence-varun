import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Summidence from "./Components/pages/Summidence";
import School from "./Components/pages/School";
import Aboutus from "./Components/pages/Aboutus";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";
import Business from "./Components/pages/Business";
import Kids from "./Components/pages/Kids";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Summidence />} />
        <Route path="/school" element={<School />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
