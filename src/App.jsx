import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BentoProduct from "./pages/BentoProduct";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

export default function App() {
  return (
    <BrowserRouter basename="/folio-app">
      <div className="min-h-screen bg-white text-ink transition-colors duration-300 dark:bg-[#0F172A] dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/bento" element={<BentoProduct />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}