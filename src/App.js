import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/products' exact element={<Product/>}/>
          <Route path='/about' exact element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
