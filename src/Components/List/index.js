/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { List } from '@mui/material';
import { ItemLists } from '../ItemList/index.js';
import './list.css';


const CardapioList = ({ searchedValue, page }) => {
  const [ cardapioList, setCardapioList ] = useState(null)
  const [ cardapioSubset, setCardapioSubset] = useState(null)

  useEffect(() => {
    if (!cardapioList) {
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
            setCardapioList(data)
        })
      } else {
        console.log('Dados Carregados')
      }
  }, [])

  useEffect(() => {
    setCardapioSubset(cardapioList)
  }, [cardapioList])

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
