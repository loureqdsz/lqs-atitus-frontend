import { useState } from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import { ItemDescription } from '../ItemDescription/index.js';
import { ModalInformation } from '../ModalInformation/index.js';
import './itemList.css';


const ItemLists = ({ key, itemIndex, item, onUpdate, onDelete, isAuthenticated }) => {
  const [open, setOpen] = useState(false)

  // ---------------- Handle Functions ------------------------------

  const handleClickOpen = () => {
    if (isAuthenticated) {
      setOpen(true)
    }
  }

  const handleClose = (value) => {
    setOpen(false)
  }

  const handleEditItem = (obj) => {
    const updatedItem = {
      itemId: item.id,
      ...obj
    }
    onUpdate(updatedItem)
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
                <ItemDescription item={item} isAuthenticated={isAuthenticated}/>
              </div>
            </ListItemText>
        </ListItemButton>
        {open && <ModalInformation onClose={handleClose} onSave={handleEditItem} onDelete={onDelete} open={open} item={item} editingMode={false}/>}
    </div>
  );
}

export { ItemLists };
