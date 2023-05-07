import { useState } from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { ItemDescription } from '../ItemDescription/index.js';
import { ModalInformation } from '../ModalInformation/index.js';
import './itemList.css';


const ItemLists = ({ key, itemIndex, item }) => {
  const [open, setOpen] = useState(false)

  //------------ Util Functions -----------------------------

  const updateMenuItem = (item) => {
    fetch(
        'http://localhost:3001/update-menu-item', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        }
      )
  }

  // ---------------- Handle Functions ------------------------------

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleEditItem = (obj) => {
    const updatedItem = {
      itemId: item.id,
      ...obj
    }
    updateMenuItem(updatedItem)
  }
  // ----------------------------------------------------------------

  return (
    <div className='Item-Box'>
        <ListItemButton
            onClick={handleClickOpen}
            sx={{
                backgroundColor: (itemIndex % 2 === 0) ? '##f5f5f5' : '#edecec',
                ":hover": {
                    background: '#f4827a'
                }
            }}
            
        >
            <ListItemText>
              <div className="List-Item-Content">
                <div className="Item-Image">
                  <img src={item?.img} className="Pizza-Image" alt="PizzaAvatarImage" />
                </div>
                <ItemDescription item={item}/>
              </div>
            </ListItemText>
        </ListItemButton>
        {open && <ModalInformation onClose={handleClose} onSave={handleEditItem} open={open} item={item} editingMode={false}/>}
    </div>
  );
}

export { ItemLists };
