import './profile.css';
// import ProfileDefault from '../../Assets/Images/Profile-Default.png'
import { useState } from 'react';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  const [ isLogged, setIsLogged ] = useState(false)
  const [ username, setUsername ] = useState('Lourenco Quadros de Souza')

  //------------ Styled Components ---------------------------
  const LoginButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: 'white',
    '&:hover': {
        color: "black",
        backgroundColor: grey[400]
    },
  }))

  const LogoutButton = styled(Button)(({ theme }) => ({
    color: "white",
    padding: '0',
    '&:hover': {
        color: grey[400],
    },
  }))
  //------------ Handle Functions -----------------------------  
  const handleLoginClick = () => {
    // navigate("/login")
    setIsLogged(true)
  }
  
  const handleLogoutClick = () => {
    navigate("/")
  }
  //------------ ------------------ ---------------------------
  
  const renderLoginInfo = () => {
    return (
        <>
            <div className="Profile-Container">
                <div className="Profile-Second-Container">
                  <div className="Profile-Display-Name">
                    <span className='Username-Text'>{username}</span>
                  </div>
                  <div className="Profile-Button-Container">
                    <LogoutButton size="small" onClick={() => handleLogoutClick()}>Sair</LogoutButton>
                  </div>                
                </div>                
            </div>            
        </>
    )
  }

  return (
    <>
        <div className="Profile"> 
            {isLogged && renderLoginInfo()}
            {!isLogged && <LoginButton size="medium"  onClick={() => handleLoginClick()}>Entrar</LoginButton>}
        </div>
    </>
  );
}

export { Profile };