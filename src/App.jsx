// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Footer from "./components/Footer";
// import Error from './pages/Error';

function App() {

  return (
    <div>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

    {/* Multi-page routing */}

      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/services" element={<Services/>} />

          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter> */}

export default App
