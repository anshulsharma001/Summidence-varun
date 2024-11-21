import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Summidence from "./Components/pages/Summidence";
import School from "./Components/pages/School";
import Aboutus from "./Components/pages/Aboutus";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";

function App() {
  return (
    <>
<Navbar/>
      <Routes>
        <Route path="/" element={<Summidence />} />
        <Route path="/school" element={<School />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
