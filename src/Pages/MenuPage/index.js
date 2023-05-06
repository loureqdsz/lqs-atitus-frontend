import './menuPage.css';
import { useState } from 'react';
import { Header } from '../../Components/Header/index.js'
import { Footer } from '../../Components/Footer/index.js'
import { CardapioList } from '../../Components/List/index.js'
import { TextBox } from '../../Components/TextBox/index.js';
import { ModalInformation } from '../../Components/ModalInformation/index.js';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';

const MenuPage = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ newItem, setNewItem ] = useState (
        {
            img: '',
            name: '',
            size: '',
            preparationTime: '',
            price: '',
            description: ''
        }
    )
    //------------ Styled Components ---------------------------
    const AddButton = styled(Button)({
        color: "white",
        backgroundColor: 'rgba(237,54,40,255)',
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(244,130,122)"
        },
    })
    //------------ Handle Functions -----------------------------
    const handleAdd = () => {
        console.log('Adicionando novo item')
        setIsOpen(true)
    }

    const handleModalClose = () => {
        console.log('Fechando a modal')
        setIsOpen(false)
    }
    //------------ ------------------ ---------------------------

    return (
        <div className="Menu">
            <Header />
            <div className="Table-Header">
                <div className="Searchbox-Content">
                    <TextBox id="search-text-box" onChange={(value) => console.log('Cliquei -> ', value)}/>
                </div>
                <AddButton endIcon={<AddIcon />} onClick={handleAdd}>Adicionar</AddButton>
            </div>
            <div className="Menu-Content">
                <div className="Menu-Content-2">
                    <CardapioList />
                </div>
            </div>
            <Footer/>
            {isOpen && <ModalInformation onClose={handleModalClose} open={isOpen} item={newItem} editingMode={true}/>}
        </div>
    );
}

export { MenuPage };
