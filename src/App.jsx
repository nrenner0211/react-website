import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Error from './pages/Error';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/services" element={<Services/>} />

          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
