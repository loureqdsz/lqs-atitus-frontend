/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { List } from '@mui/material';
import { ItemLists } from '../ItemList/index.js';
import './list.css';


const CardapioList = ({ searchedValue, page }) => {
  const cardapioList = [
    {
        id: 1,
        img: 'https://www.recetaslider.cl/wp-content/uploads/2022/04/pizza.jpg',
        name: 'Napolitana',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '10 minutos',
        price: 'R$ 36,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    },
    {
        id: 2,
        img: 'https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg',
        name: 'Calabresa',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '12 minutos',
        price: 'R$ 30,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&usqp=CAU',
        name: 'Mussarela',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '10 minutos',
        price: 'R$ 35,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 4,
        img: 'https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg',
        name: 'Marguerita',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '10 minutos',
        price: 'R$ 32,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqL-QNMrSIOiIX4vAthjUpY9oAcgFER1_CQ&usqp=CAU',
        name: 'Rúcula com Tomate Seco',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '11 minutos',
        price: 'R$ 38,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 6,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZlTAE9ps4WKrLt1HN8OnzfI81VgkHrTAtA&usqp=CAU',
        name: 'Brocolis, Cenoura e Molho Branco',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '15 minutos',
        price: 'R$ 40,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 7,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqx0s0QVnE8hOK2p3dIcXCLFEaIBDfXUcZ7g&usqp=CAU',
        name: 'Peperoni',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '15 minutos',
        price: 'R$ 36,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 8,
        img: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/04/La-Braciera_Pizza-Italiana_Neuton-Araujo.jpg',
        name: 'Basca com Rúcula',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '14 minutos',
        price: 'R$ 42,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 9,
        img: 'https://i0.statig.com.br/bancodeimagens/2w/p1/r8/2wp1r8aqfu945dy59lycllfmg.jpg',
        name: 'Mussarela de Buffula e Rúcula',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '16 minutos',
        price: 'R$ 44,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 10,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohiNCTbx_Rj6fNruuf0uwYSdbLLpGiMO8nQ&usqp=CAU',
        name: 'Brócolis com Ovo',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '10 minutos',
        price: 'R$ 37,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
    }, 
    {
        id: 11,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ89f1psbuQFV-0k8U-v2fhSLhPILnxc4Zhw&usqp=CAU',
        name: 'Mussarela com Azeitona',
        size: 'Pequeno, Médio e Grande',
        preparationTime: '10 minutos',
        price: 'R$ 36,00',
        description: 'Pizza de extrema qualidade, vale ressaltar que o selo de “pizza napolitana” compreende duas variedades: a marguerita (feita com muçarela, azeite, manjericão e molho de tomate) e a marinara (feita com alho, azeite, tomate e orégano)'
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
