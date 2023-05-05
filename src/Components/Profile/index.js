import './profile.css';
// import ProfileDefault from '../../Assets/Images/Profile-Default.png'
import Button from '@mui/material/Button'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Profile = () => {
  const [ logado, setLogado ] = useState(false)
  const [ username, setUsername ] = useState('Lourenco Quadros de Souza')

  const handleLoginClick = () => {
    setLogado(true)
  }

  const handleLogoutClick = () => {
    setLogado(false)
  }

  const renderLoginInfo = () => {
    return (
        <>
            <div className="Profile-Second-Container">
                {/* <img src={ProfileDefault} className="App-Logo" alt="CardapioLogo" /> */}
                <span className='Username-Text'>{username}</span>
                {renderButton('Sair', handleLogoutClick)}
            </div>            
        </>
    )
  }

  const renderButton = (buttonTitle, onClick) => {
    return (
        <>
            <div className='Button-Container'>
                <Button sx={{ color: "red"}} size="small" component={Link} to="/">{buttonTitle}</Button>
            </div> 
        </>
    )
  }

  return (
    <>
        <div className="Profile-Container"> 
            {logado && renderLoginInfo()}
            {!logado && renderButton('Entrar', handleLoginClick)}
        </div>
    </>
  );
}

export { Profile };