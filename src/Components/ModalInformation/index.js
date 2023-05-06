import './modalInformation.css';
import { Dialog, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';


const ModalInformation = ({ onClose, open, item }) => {

    //------------ Styled Components ---------------------------
    const BackButton = styled(IconButton)({
        color: 'rgba(237,54,40,255)',
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(244,130,122)"
        },
      })

    const Primary = styled(Button)({
        color: "white",
        backgroundColor: 'rgba(237,54,40,255)',
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(244,130,122)"
        },
      })
    //------------ ------------------ ---------------------------

  return (
    <Dialog open={open}>
        <div className="Modal-Container">
            <div className="Modal-Title">
                <span className="Title-Name">Pizza {item.name}</span>
                <BackButton aria-label="delete" size="medium" onClick={onClose}>
                    <CloseIcon />
                </BackButton>
            </div>
            <div className="Separator" />
            <div className="Modal-Content">
                <div className="Modal-Text-Container">
                    <span className="Modal-Text-Title">Tipo: </span>
                    <span className="Modal-Text-Description">"Teste"</span>
                </div>
                <div className="Modal-Text-Container">
                    <span className="Modal-Text-Title">Habilidade: </span>
                    <span className="Modal-Text-Description">"Teste"</span>
                </div>
                <div className="Modal-Text-Container">
                    <span className="Modal-Text-Title">Peso: </span>
                    <span className="Modal-Text-Description">{`10 kg`}</span>
                </div>
                <div className="Modal-Text-Container">
                    <span className="Modal-Text-Title">Stats: </span>
                    <span className="Modal-Text-Description">"Teste"</span>
                </div>
            </div>
            <div className= "Close-Button">
                <Primary variant="contained" onClick={onClose} >
                        Editar
                </Primary>                            
            </div>
        </div>
    </Dialog>
  );
}

export { ModalInformation };
