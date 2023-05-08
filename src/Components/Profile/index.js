import './profile.css';
// import ProfileDefault from '../../Assets/Images/Profile-Default.png'
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";

const Profile = ({ userInformation }) => {
  const navigate = useNavigate()
  const [ userInfo, setUserInfo ] = useState(null)

  //------------ UseEffect Functions ------------------------

  useEffect(() => {
      setUserInfo(userInformation)
  }, [userInformation])

  //------------ Styled Components ---------------------------
  const LoginButton = styled(Button)({
    color: "black",
    backgroundColor: 'white',
    '&:hover': {
        color: "black",
        backgroundColor: grey[400]
    },
  })

  const LogoutButton = styled(Button)({
    color: "white",
    padding: '0',
    '&:hover': {
        color: grey[400],
    },
  })
  //------------ Handle Functions -----------------------------  
  const handleLoginClick = () => {
    navigate("/login")
    // setIsLogged(true)
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
                    <span className='Username-Text'>{userInfo?.name}</span>
                  </div>
                  <div className="Profile-Button-Container">
                    <LogoutButton size="small" onClick={() => handleLogoutClick()}>Sair</LogoutButton>
                  </div>                
                </div>                
            </div>            
        </>
    )
  }

  const renderProfile = () => {
    if (userInformation) {
      return renderLoginInfo()
    }

    return (
      <>
        <LoginButton size="medium"  onClick={() => handleLoginClick()}>Entrar</LoginButton>
      </>
    )
  }

  return (
    <>
        <div className="Profile"> 
            {renderProfile()}
        </div>
    </>
  );
}

export { Profile };