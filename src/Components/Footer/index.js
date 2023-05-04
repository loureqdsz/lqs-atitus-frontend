import './footer.css';
import CardapioLogo from '../../Assets/Images/Logo-Cardapio.png'

const Footer = () => {
  return (
    <>
        <div className="Footer-Container">            
            <div className="Footer-Second-Container">
                <img src={CardapioLogo} className="App-Restaurant-Logo" alt="CardapioLogo" />
            </div>            
            {/* <a className="App-Title" href="https://github.com/loureqdsz/lqs-atitus-frontend">GitHub Project Repository</a> */}
        </div>
    </>
  );
}

export { Footer };