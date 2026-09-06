import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import UIDesigns from "./projects/UI_Designs";
import DaysChallenge from "./projects/Challenge";
import First_series from "./series/First_series";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";
import Quizes from "./pages/Quiz";
import { BlogList, BlogPost} from "./Blog/Blog";
import { SearchResults } from "./Components/SearchResults";
import OrderForm from "./Components/Order";
import Thirty_days_thirty_designs from "./series/thirty_days_thirty_designs";
import Tutorials from "./pages/tutorials";

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
          <Route path="/contact" element={<Contact />} />

          <Route path="/projects/ui-designs" element={<UIDesigns />} />
          <Route path="/projects/Challenge" element={<DaysChallenge />} />
          <Route path="/series/First_series" element={<First_series />} />
          <Route path="/coming-soon" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/quiz" element={<Quizes />} />
          {/* <Route path="/blog" element={<BlogList />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/series/Thirty_days_thirty_designs" element={<Thirty_days_thirty_designs />}/>
          <Route path="/tutorials" element={<Tutorials />} / >
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
