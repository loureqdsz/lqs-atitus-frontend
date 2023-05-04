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
                    background: '#93d7ef'
                }
            }}
            
        >
            <ListItemAvatar>
                <Avatar>
                    <img src={item.img} className="Pokemon-Image" alt="PokemonAvatarImage" />
                </Avatar>
            </ListItemAvatar>
            <ListItemText>
                <ItemDescription item={item}/>
            </ListItemText>
        </ListItemButton>
        <ModalInformation onClose={handleClose} open={open} item={item}/>
    </div>
  );
}

export { ItemLists };
