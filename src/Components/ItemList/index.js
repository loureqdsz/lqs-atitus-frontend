import { useEffect, useState } from 'react';
import { ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { ItemDescription } from '../ItemDescription/index.js';
import { ModalInformation } from '../ModalInformation/index.js';
import './itemList.css';


const ItemLists = ({ key, itemIndex, item }) => {
  const [open, setOpen] = useState(false)

  // ---------------- Handle Functions ------------------------------

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

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
                  <img src={item.img} className="Pizza-Image" alt="PizzaAvatarImage" />
                </div>
                <ItemDescription item={item}/>
              </div>
            </ListItemText>
        </ListItemButton>
        <ModalInformation onClose={handleClose} open={open} item={item}/>
    </div>
  );
}

export { ItemLists };
