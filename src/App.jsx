import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import BentoProduct from './pages/BentoProduct';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/bento" element={<BentoProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
