import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { listen } from './app/listener';
import Home from './pages/Home';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Invoice from './pages/Invoice';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/navbarSection';
// import Footer from './components/footerSection';

function App() {
  // Call Listener from features
  useEffect(() => {
    listen()
  }, []);
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/checkout' element={<Cart/>}/>
        <Route path='/invoice/:order_id' element={<Invoice/>}/>
        <Route path='/*' element={<Navigate replace to='/'/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
