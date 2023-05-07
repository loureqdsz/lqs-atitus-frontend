/* eslint-disable no-restricted-globals */
import './menuPage.css';
import { useEffect, useState } from 'react';
import { Header } from '../../Components/Header/index.js'
import { Footer } from '../../Components/Footer/index.js'
import { CardapioList } from '../../Components/List/index.js'
import { TextBox } from '../../Components/TextBox/index.js';
import { ModalInformation } from '../../Components/ModalInformation/index.js';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const MenuPage = () => {
    const [textBoxValue, setTextBoxValue] = useState("")    
    const [ allMenuList, setAllMenuList ] = useState(null)
    const [ menuListSubset, setMenuListSubset ] = useState(null)
    const [ isOpen, setIsOpen ] = useState(false)
    const newItem = {
        img: '',
        name: '',
        size: '',
        preparationTime: '',
        price: '',
        description: ''
    }
    //------------ Styled Components ---------------------------
    const AddButton = styled(Button)({
        color: "white",
        backgroundColor: 'rgba(237,54,40,255)',
        '&:hover': {
            color: "white",
            backgroundColor: "rgb(244,130,122)"
        },
    })

    //------------ UseEffect Functions ------------------------

    useEffect(() => {
        if (!allMenuList) {
            getAllMenuData()   
        } else {
            console.log('Dados Carregados')
        }
      }, [])

    useEffect(() => {
        handleSearch(textBoxValue)
    }, [textBoxValue])

    //------------ Util Functions -----------------------------

    const getAllMenuData = () => {
        fetch(
            'http://localhost:3001/menu', {
                method: 'GET'
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
              setAllMenuList(data)
              setMenuListSubset(data)
          })
    }

    const createNewItem = (item) => {
        fetch(
            'http://localhost:3001/create-menu-item', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            }
          )
    }

    //------------ Handle Functions -----------------------------
    const handleAdd = () => {
        setIsOpen(true)
    }

    const handleModalClose = () => {
        setIsOpen(false)
    }

    const handleAddNewItem = (obj) => {
        createNewItem(obj)
    }

    const handleSearch = (valueSearched) => {
        if (!valueSearched) {
            setMenuListSubset(allMenuList)
            return
        }

        const newSubset = []
        allMenuList.forEach((item) => {
            const itemName = item?.name.toLowerCase()
            if (itemName.includes(valueSearched.toLowerCase())) {
                newSubset.push(item)
            }
        })

        setMenuListSubset(newSubset)
    }
    //------------ ------------------ ---------------------------    

    return (
        <div className="Menu">
            <Header />
            <div className="Table-Header">
                <div className="Searchbox-Content">
                    <TextBox id="search-text-box" value={textBoxValue} onChange={setTextBoxValue}/>
                </div>
                <AddButton endIcon={<AddIcon />} onClick={handleAdd}>Adicionar</AddButton>
            </div>
            <div className="Menu-Content">
                <div className="Menu-Content-2">
                    <CardapioList menuList={menuListSubset}/>
                </div>
            </div>
            <Footer/>
            {isOpen && <ModalInformation onClose={handleModalClose} onSave={handleAddNewItem} open={isOpen} item={newItem} isMenuItemModal={true}/>}
        </div>
    );
}

export { MenuPage };
