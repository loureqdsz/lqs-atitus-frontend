/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { List } from '@mui/material';
import { ItemLists } from '../ItemList/index.js';
import Cardapio from '../../Assets/Images/Logo-Cardapio.png'
import './list.css';


const CardapioList = ({ searchedValue, page }) => {
  const cardapioList = [
    {
        id: 1,
        img: Cardapio
    },
    {
        id: 2,
        img: Cardapio
    }, 
    {
        id: 3,
        img: Cardapio
    }
  ]
  return (
    <div className='List-box'> 
        <List 
            dense={true}
            sx={{
                'max-height: ': '10%',
                overflow: 'auto'
            }}>
            {
                cardapioList && cardapioList.map((item, index) => {
                    return <ItemLists key={item?.id} itemIndex={index} item={item}/>
                })
            }
        </List>       
    </div>
  );
}

export { CardapioList };
