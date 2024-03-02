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
import PageLogin from './pages/Account/Auth/Login/PageLogin';
import PageRegister from './pages/Account/Auth/Register/PageRegister';
import Account from './pages/Account/Account/Account';

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
          <Route path='/carts/choose-address' exact element={<ChooseAddress/>}/>
          <Route path='/carts/new-address' exact element={<NewAddress/>}/>
          <Route path='/carts/payment' exact element={<CartPayment/>}/>
          <Route path='/account/login' exact element={<PageLogin/>}/>
          <Route path='/account/register' exact element={<PageRegister/>}/>
          <Route path='/account/dashboard' exact element={<Account />}/>
          <Route path='/account/order-list' exact element={<Account />}/>
          <Route path='/account/address' exact element={<Account />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
