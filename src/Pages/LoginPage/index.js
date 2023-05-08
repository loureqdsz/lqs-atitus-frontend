import './login.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import CardapioLogo from '../../Assets/Images/Logo-Cardapio.png'
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
    const navigate = useNavigate();

    //------------ Styled Components ---------------------------
    const SignInButton = styled(Button)({
        color: "white",
        backgroundColor: "rgba(237,54,40,255)",
        marginBottom: "5px",
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(244,130,122)"
        },
    })

    const SignUpButton = styled(Button)({
        color: "rgba(237,54,40,255)",
        marginBottom: "5px",
        '&:hover': {
            color: "rgb(244,130,122)"
        },
    })

    const GoogleSignUpButton = styled(Button)({
        color: grey[600],
        marginBottom: "5px",
        '&:hover': {
            color: grey[400]
        },
    })

    const BackButton = styled(IconButton)({
        color: "rgba(237,54,40,255)",
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(244,130,122)"
        },
    })

    const StyledTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: grey[600],
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: grey[600],
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: grey[600],
          },
          '&:hover fieldset': {
            borderColor: grey[600],
          },
          '&.Mui-focused fieldset': {
            borderColor: grey[600],
          },
        },
      });
    
    //------------ Util Functions -----------------------------

    const getGoogleAuthentication = async () => {
        try {
            fetch(
                'http://localhost:3001/auth/google', {
                    method: 'GET',
                }
              ).then((res) => {
                  if (res.status) {
                      return res.json()
                  }
              }).then((data) => {
                  if (!data || data.error) {
                      console.log('Ocorreu um erro na request')
                      return
                  }
                  window.location.href = data.redirectUrl
              })
        } catch (err) {
            console.log(err)
        }
    }

    //------------ Handle Functions -----------------------------
    
    const handleGoogleClick = async () => {
        await getGoogleAuthentication()
    }
    //------------ ------------------ ---------------------------

    return (
        <div className="Login-Background">
            <div className="Login">      
                <div className="Login-Content">                
                    <div className="Login-Header">
                        <BackButton aria-label="home" size="large" onClick={() => navigate('/')}>
                            <HomeIcon />
                        </BackButton>
                        <div className="Login-Separator" />
                    </div>
                    <div className="Login-Logo-Content">
                        <div className="Login-Logo-Image">
                            <img src={CardapioLogo} className="Login-Restaurant-Logo" alt="CardapioLogo" />
                        </div>
                        <div className="Login-Restaurant-Title">
                            <span className="Login-Restaurant-Name">ATITUS RESTAURANTE</span>
                        </div>
                    </div>
                    <div className="Login-Input-Content">
                        <div className="Login-Input-Component">
                            <StyledTextField
                                required
                                id="outlined-required"
                                label="Email"
                                fullWidth
                            />
                        </div>
                        <div className="Login-Input-Component">
                            <StyledTextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className="Login-Buttons">
                        <SignInButton variant="contained" fullWidth>Entrar com a Conta</SignInButton>
                        <SignUpButton fullWidth>Registrar-se</SignUpButton>
                        <GoogleSignUpButton fullWidth startIcon={<GoogleIcon />} onClick={handleGoogleClick}>Entrar com o Google</GoogleSignUpButton>
                    </div>
                    <div className="Login-Separator" />
                </div>
            </div>
        </div>
    );
}

export { LoginPage };
