import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BentoProduct from './pages/BentoProduct';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bento" element={<BentoProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
  );
}
