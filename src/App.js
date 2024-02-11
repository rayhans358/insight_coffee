import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import About from './pages/About/About';
import { listen } from './app/listener';
import Contact from './pages/Contact/Contact';
import CartProduct from './pages/Cart/CartProduct/CartProduct';
import CartDelivery from './pages/Cart/CartDelivery/CartDelivery';
import ChooseAddress from './components/Address/ChooseAddress/ChooseAddress';
import NewAddress from './components/Address/NewAddress/NewAddress';
import CartPayment from './pages/Cart/CartPayment/CartPayment';
import Auth from './pages/Account/Auth/Auth';

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
          <Route path='/carts' exact element={<CartProduct/>}/>
          <Route path='/carts/delivery' exact element={<CartDelivery/>}/>
          <Route path='/choose-address' exact element={<ChooseAddress/>}/>
          <Route path='/new-address' exact element={<NewAddress/>}/>
          <Route path='/carts/payment' exact element={<CartPayment/>}/>
          <Route path='/account/login-register' exact element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
