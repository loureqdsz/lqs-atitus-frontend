import './header.css';
import { Profile } from '../Profile/index.js'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    //------------ Styled Components ---------------------------
    const ColorIconButton = styled(IconButton)(({ theme }) => ({
        color: "white",
        '&:hover': {
            color: grey[300],
            backgroundColor: grey[900]
        },
    }))
    //------------ ------------------ ---------------------------

    return (
        <>
            <div className="Header-Container">
                <div className="Header-Second-Container">
                    <ColorIconButton aria-label="delete" size="large" onClick={() => navigate('/')}>
                        <ArrowBackIcon />
                    </ColorIconButton>
                    <div className="Header-Title">
                        <span>
                            Atitus Cardápio
                        </span>
                    </div>
                </div>
                <Profile/>
            </div>
        </>
    );
}

export { Header };