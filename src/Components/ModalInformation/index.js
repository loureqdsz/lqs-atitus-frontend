import { Dialog, Button } from '@mui/material';
import './modalInformation.css';


const ModalInformation = ({ onClose, open, item }) => {
  // ---------------- Render Functions ------------------------------
//   const renderMultiValues = (values, itemField) => {
//     if (!values) {
//         return
//     }
//     let multiLabel = ''
//     for (let i = 0; i < values.length; i++) {
//         multiLabel = `${values[i][itemField].name}, ` + multiLabel
//     }
//     multiLabel = multiLabel.slice(0, multiLabel.length-2)
//     return (
//         <span className="Modal-Text-Description">{multiLabel}</span>
//     )
//   }

//   const renderMultiStatsValues = (values) => {
//     if (!values) {
//         return
//     }
//     let multiLabel = ''
//     for (let i = 0; i < values.length; i++) {
//         multiLabel = `${values[i].stat.name}: ${values[i]['base_stat']}, ` + multiLabel
//     }
//     multiLabel = multiLabel.slice(0, multiLabel.length-2)
//     return (
//         <span className="Modal-Text-Description">{multiLabel}</span>
//     )
//   }
  // ----------------------------------------------------------------

  return (
    <Dialog open={open}>
        <div className="Modal-Container">
            <div className="Modal-Title">
                <span>Estatisticas da Pizza Teste</span>
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
                <Button 
                    variant="contained" 
                    onClick={onClose}
                    sx={{
                        backgroundColor: '#0F84AE',
                        borderRadius: '15px'
                    }}
                >
                        Fechar
                </Button>                            
            </div>
        </div>
    </Dialog>
  );
}

export { ModalInformation };
