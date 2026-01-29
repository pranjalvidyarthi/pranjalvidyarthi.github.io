import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import UIDesigns from "./projects/UI_Designs";
import DaysChallenge from "./projects/100DaysChallenge";
import HTML_1_series from "./series/html_1_series";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import Quizes from "./pages/Quiz";

import "./App.css"; // CSS file for sticky footer

function AppContent() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<UnderConstruction />} />

          <Route path="/projects/ui-designs" element={<UIDesigns />} />
          <Route path="/projects/100DaysChallenge" element={<DaysChallenge />} />
          <Route path="/series/html_1_series" element={<HTML_1_series />} />

          <Route path="/coming-soon" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/quiz" element={<Quizes />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
