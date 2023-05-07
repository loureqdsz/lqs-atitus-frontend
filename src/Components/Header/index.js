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
    const BackButton = styled(IconButton)({
        color: "white",
        '&:hover': {
            color: grey[300],
            backgroundColor: grey[900]
        },
    })
    //------------ Util Functions ==---------------------------
    const repopulateMenuItems = () => {
        fetch('http://localhost:3001/restore-menu', { method: 'POST' })
    }
    //------------ Handle Functions ==---------------------------
    const handleBackButon = () => {
        repopulateMenuItems()
        navigate('/')
    }
    //------------ ------------------ ---------------------------

    return (
        <>
            <div className="Header-Container">
                <div className="Header-Second-Container">
                    <BackButton aria-label="delete" size="large" onClick={handleBackButon}>
                        <ArrowBackIcon />
                    </BackButton>
                    <div className="Header-Title">
                        <span>
                            Cardápio
                        </span>
                    </div>
                </div>
                <Profile/>
            </div>
        </>
    );
}

export { Header };