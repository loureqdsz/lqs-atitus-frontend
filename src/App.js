import './App.css';
import { Routes, Route} from 'react-router-dom';
import { HomePage } from './Pages/HomePage/index.js'
import { MenuPage } from './Pages/MenuPage/index.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="menu" element={ <MenuPage />} />
        <Route path="login" element={ <MenuPage />} />
      </Routes>     
    </div>
  );
}

export default App;
