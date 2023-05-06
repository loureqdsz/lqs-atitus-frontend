import './modalInformation.css';
import { useEffect, useState } from 'react';
import { Dialog, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { grey, green } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';


const ModalInformation = ({ onClose, open, item, editingMode }) => {
    const [isEditing, setIsEditing] = useState(editingMode)
    const [ name, setName ] = useState(item?.name)
    const [ size, setSize ] = useState(item?.size)
    const [ preparationTime, setPreparationTime ] = useState(item?.preparationTime)
    const [ price, setPrice ] = useState(item?.price)
    const [ desciption, setDesciption ] = useState(item?.description)
    const [ imageUrl, setImageUrl ] = useState(item?.img)

    //------------ Updating States -----------------------------
    
    //------------ Styled Components ---------------------------
    const BackButton = styled(IconButton)({
        color: 'rgba(237,54,40,255)',
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(244,130,122)"
        },
    })

    const DeleteButton = styled(Button)({
        color: "white",
        backgroundColor: "rgba(237,54,40,255)",
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(244,130,122)"
        },
    })

    const EditButton = styled(Button)({
        color: "white",
        backgroundColor: grey[600],
        '&:hover': {
            color: "white",
            backgroundColor: grey[500]
        },
    })

    const SaveButton = styled(Button)({
        color: "white",
        backgroundColor: green[700],
        '&:hover': {
            color: "white",
            backgroundColor: green[500]
        },
    })

    const FormControlStyled = styled(FormControl)({
        '& .MuiInput-underline:after': {
            borderBottomColor: grey[600],
        }
    })
    //------------ Handle Functions -----------------------------
    const handleClose = () => {
        setIsEditing(false)
        onClose()
    }

    const handleEdit = () => {
        console.log('Item Editado')
        setIsEditing(true)
    }

    const handleDelete = () => {
        console.log('Item Deletado')
        onClose()
    }

    const handleCancel = () => {
        console.log('Edicao Cancelada')        
        setIsEditing(false)
    }

    const handleSave = () => {
        console.log('Edicao Salvada')
        setIsEditing(false)
    }

    const handleInputChange = (value, onChange) => {
        console.log(value)
        onChange(value)
    }
    //------------ Render Functions -----------------------------
    const renderTextField = (itemValue, onChange) => {
        return (
            <div className="Input-Container">
                <FormControlStyled variant="standard" sx={{ m: 1, width: '100%', margin: '0px' }} disabled={!isEditing}>
                    <Input
                    id="standard-adornment-weight"
                    aria-describedby="standard-weight-helper-text"
                    defaultValue={itemValue}
                    onChange={(e)=>handleInputChange(e.target.value, onChange)}
                    />
                </FormControlStyled>
            </div>
        )
    }

    const renderUrlField = (value) => {
        return (
            <div className="Url-Field">
                <div className="Tertiary-Content">
                    <span className="Modal-Text-Title">Foto Url: </span>
                    {renderTextField(value)}
                </div>
            </div>
        )
    }
    
    const renderModalButtons = () => {
        if (isEditing) {
            return (
                <>
                    <div className="Container-Button">
                        <DeleteButton variant="contained" fullWidth onClick={handleCancel} >
                                Cancelar
                        </DeleteButton>
                    </div>
                    <div className="Container-Button">
                        <SaveButton variant="contained" fullWidth onClick={handleSave} >
                                Salvar
                        </SaveButton>
                    </div>
                </>
            )
        }

        return (
            <>
                <div className="Container-Button">
                    <DeleteButton variant="contained" fullWidth onClick={handleDelete} >
                            Deletar
                    </DeleteButton>
                </div>
                <div className="Container-Button">
                    <EditButton variant="contained" fullWidth onClick={handleEdit} >
                            Editar
                    </EditButton>
                </div>
            </>
        )
    }
    //------------ ------------------ ---------------------------

  return (
    <Dialog open={open}>
        <div className="Modal-Container">
            <div className="Modal-Title">
                <span className="Title-Name">Informações Sobre a Pizza</span>
                <BackButton aria-label="delete" size="medium" onClick={handleClose}>
                    <CloseIcon />
                </BackButton>
            </div>
            <div className="Separator" />
            <div className="Modal-Content">
                <div className="Primary-Content">
                    <div className="Item-image">
                        <img src={imageUrl} className="Pizza-Image" alt="PizzaAvatarImage" />
                    </div>
                    <div className="Item-Content">
                        <span className="Modal-Text-Title">Nome: </span>
                        {renderTextField(name, setName)}
                        <span className="Modal-Text-Title">Tamanho Disponível: </span>
                        {renderTextField(size, setSize)}
                    </div>                    
                </div>
                <div className="Primary-Content">
                    <div className='Secondary-Content'>
                        <span className="Modal-Text-Title">Tempo de Preparo: </span>
                        {renderTextField(preparationTime, setPreparationTime)}                        
                    </div>
                    <div className='Secondary-Content'>
                        <span className="Modal-Text-Title">Valor: </span>
                        {renderTextField(price, setPrice)}
                    </div>
                </div>
                <div className="Tertiary-Content">
                    <span className="Modal-Text-Title">Descrição: </span>
                    {renderTextField(desciption, setDesciption)}
                </div>
                {isEditing && renderUrlField(imageUrl, setImageUrl)}
            </div>
            <div className= "Container-Buttons">
                {renderModalButtons()}
            </div>
        </div>
    </Dialog>
  );
}

export { ModalInformation };
