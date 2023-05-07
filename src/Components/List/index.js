/* eslint-disable react-hooks/exhaustive-deps */
import { List } from '@mui/material';
import { ItemLists } from '../ItemList/index.js';
import './list.css';


const CardapioList = ({ menuList }) => {
  return (
    <div className='List-box'> 
        <List 
            dense={true}
            sx={{
                'max-height: ': '10%',
                overflow: 'auto'
            }}>
            {
                menuList && menuList.map((item, index) => {
                    return <ItemLists key={item?.id} itemIndex={index} item={item}/>
                })
            }
        </List>       
    </div>
  );
}

export { CardapioList };
