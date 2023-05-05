import './homePage.css';
import CardapioLogo from '../../Assets/Images/Logo-Cardapio.png'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom'

const HomePage = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: red[400],
        borderColor: red[400],
        '&:hover': {
            color: red[900],
            borderColor: red[900]
        },
    }))

    return (
        <div className="Home-Background">
            <div className="Home">
                <div className="Header">
                    <div className="Login-Button">
                        <ColorButton variant="outlined" size="large" component={Link} to="menu">
                            Entrar
                        </ColorButton>
                    </div>
                </div>
                <div className="Home-Content">                    
                    <div className="Logo-Cardapio">
                        <img src={CardapioLogo} className="App-Restaurant-Logo" alt="CardapioLogo" />
                    </div>
                    <div className="Cardapio-Button"> 
                        <ColorButton variant="outlined" size="large" component={Link} to="menu">
                            Visualizar Cardápio
                        </ColorButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { HomePage };
