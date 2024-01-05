import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import About from './pages/About/About';
import { listen } from './app/listener';
import Contact from './pages/Contact/Contact';

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/products' exact element={<Product/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
