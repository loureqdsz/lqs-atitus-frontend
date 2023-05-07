import './modalInformation.css';
import { useState } from 'react';
import { Dialog, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { grey, green } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';


const ModalInformation = ({ onClose, onSave, open, item, isMenuItemModal = false }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [ name, setName ] = useState(item?.name)
    const [ size, setSize ] = useState(item?.size)
    const [ preparationTime, setPreparationTime ] = useState(item?.preparationTime)
    const [ price, setPrice ] = useState(item?.price)
    const [ description, setDescription ] = useState(item?.description)
    const [ imageUrl, setImageUrl ] = useState(item?.img)

    //------------ Updating States -----------------------------

    //------------ Util Functions -----------------------------

    const deleteMenuItem = (item) => {
        fetch(
            'http://localhost:3001/delete-menu-item', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            }
          )
    }

    const shouldDisableTheField = () => {
        if (isMenuItemModal) {
            return false
        }

        return !isEditing
    }
    
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
    //------------ Handle Functions -----------------------------
    const handleClose = () => {
        setIsEditing(false)
        onClose()
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleDelete = () => {
        const itemId = {
            itemId: item.id
        }
        deleteMenuItem(itemId)
        onClose()
    }

    const handleCancel = () => {
        if (isMenuItemModal) {
            onClose()
        }
        setIsEditing(false)
    }

    const handleSave = () => {
        const newObj = {
            img: imageUrl,
            name: name,
            size: size,
            preparationTime: preparationTime,
            price: price,
            description: description
        }
        onSave(newObj)
        onClose()
    }

    //------------ Render Functions -----------------------------
    const renderTextField = (itemValue, onChange) => {
        return (
            <div className="Input-Container">
                <FormControl variant="standard" sx={{ m: 1, width: '100%', margin: '0px', '& .MuiInput-underline:after': { borderBottomColor: 'black' } }} disabled={shouldDisableTheField()}>
                    <Input
                    id="standard-adornment-weight"
                    aria-describedby="standard-weight-helper-text"
                    defaultValue={itemValue}
                    onChange={(e) => onChange(e.target.value)}
                    />
                </FormControl>
            </div>
        )
    }

    const renderUrlField = (value, onChange) => {
        return (
            <div className="Url-Field">
                <div className="Tertiary-Content">
                    <span className="Modal-Text-Title">Foto Url: </span>
                    {renderTextField(value, onChange)}
                </div>
            </div>
        )
    }
    
    const renderModalButtons = () => {
        if (isEditing || isMenuItemModal) {
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
                    {renderTextField(description, setDescription)}
                </div>
                {(isEditing || isMenuItemModal) && renderUrlField(imageUrl, setImageUrl)}
            </div>
            <div className= "Container-Buttons">
                {renderModalButtons()}
            </div>
        </div>
    </Dialog>
  );
}

export { ModalInformation };
