import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './app/components/navbarSection';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
