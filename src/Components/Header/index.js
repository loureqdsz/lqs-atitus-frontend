import './header.css';
// import CardapioLogo from '../../Assets/Images/Logo-Cardapio.png'
import { Profile } from '../Profile/index.js'

const Header = () => {
  return (
    <>
        <div className="Header-Container">
            {/* <img src={CardapioLogo} className="App-Logo" alt="PokemonLogo" /> */}
            <div className="Header-Second-Container">
                <div className="App-Title">
                    <span>
                        Cardapio do Restaurante
                    </span>
                </div>
            </div>
            <Profile/>
        </div>
    </>
  );
}

export { Header };