import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './app/components/navbarSection';
// import Footer from './app/components/footerSection';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
