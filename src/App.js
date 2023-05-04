import './App.css';
import { Header } from './Components/Header/index.js'
import { Footer } from './Components/Footer/index.js'
import { CardapioList } from './Components/List/index.js'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-Content">
        <div className="App-Content-2">
          <CardapioList />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
