import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Mammography from "./pages/Mammography";
import Histology from "./pages/Histology";
import Contact from "./pages/ContactUs";
import Sonography from "./pages/Sonography";

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/services/histolpathology"
              element={<Histology />}
            />{" "}
            <Route path="/services/mammography" element={<Mammography />} />{" "}
            <Route path="/services/sonography" element={<Sonography />} />{" "}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
