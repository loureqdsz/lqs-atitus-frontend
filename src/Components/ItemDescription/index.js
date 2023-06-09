import { useEffect, useState } from 'react';
import './itemDescription.css';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { styled } from '@mui/material/styles';


const ItemDescription = ({ item, isAuthenticated }) => {
    const [ shouldRenderMoreInformation, setShouldRenderMoreInformation ] = useState(false)

    //------------ UseEffect Functions -------------------------

    useEffect(() => {
        setShouldRenderMoreInformation(isAuthenticated)
    }, [isAuthenticated])

    //------------ Styled Components ---------------------------

    const LaunchIcon = styled(LaunchOutlinedIcon)({
        color: 'rgb(236,44,28)',
        fontSize: '18px',
        marginLeft: '5px'
    })

    //------------ Render functions ----------------------------

    const renderMoreInformation = () => {
        return (
            <div className="More-Information">
                <div className="Label-Click">
                    <span className="Label-Description">Mais Ações</span>
                    <LaunchIcon />
                </div>
            </div>
        )
    }
    //------------ ------------------ ---------------------------

    return (
        <>
            <div className='Item-Description-Container'>
                <div className='Description-Container'>
                    <div className="Primary-Container">
                        <span className="Label">Pizza</span>
                        <span className="Label-Description">{item?.name}</span>
                        <span className="Second-Label">Tamanho Disponível</span>
                        <span className="Second-Label-Description">{item.size}</span>
                    </div>
                    <div className="Secondary-Container">
                        <span className="Second-Label">Tempo de Preparo</span>
                        <span className="Second-Label-Description">{item?.preparationTime} minutos</span>
                        <span className="Second-Label">Valor</span>
                        <span className="Second-Label-Description">R$ {item?.price}</span>
                    </div>
                    <div className="Tertiary-Container">
                        <span className="Second-Label">Descrição</span>
                        <span className="Second-Label-Description">{item?.description}</span>
                    </div>
                </div>
                {shouldRenderMoreInformation && renderMoreInformation()}
            </div>
        </>
    );
}

export { ItemDescription };
