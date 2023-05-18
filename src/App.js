import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import Footer from "../src/Components/Footer";
import About from "../src/Page/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
