import './header.css';
import { Profile } from '../Profile/index.js'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const Header = ({ backButtonClick, userInformation }) => {

    //------------ Styled Components ---------------------------
    const BackButton = styled(IconButton)({
        color: "white",
        '&:hover': {
            color: grey[300],
            backgroundColor: grey[900]
        },
    })
    //------------ ------------------ ---------------------------

    return (
        <>
            <div className="Header-Container">
                <div className="Header-Second-Container">
                    <BackButton aria-label="delete" size="large" onClick={backButtonClick}>
                        <ArrowBackIcon />
                    </BackButton>
                    <div className="Header-Title">
                        <span>
                            Cardápio
                        </span>
                    </div>
                </div>
                <Profile userInformation={userInformation}/>
            </div>
        </>
    );
}

export { Header };