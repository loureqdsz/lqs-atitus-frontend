import './itemDescription.css';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { styled } from '@mui/material/styles';


const ItemDescription = ({ item }) => {
    //------------ Styled Components ---------------------------
    const LaunchIcon = styled(LaunchOutlinedIcon)({
        color: 'rgb(236,44,28)',
        fontSize: '18px',
        marginLeft: '5px'
    })
    //------------ ------------------ ---------------------------

    return (
        <>
            <div className='Item-Description-Container'>
                <div className='Description-Container'>
                    <div className="Primary-Container">
                        <span className="Label">Pizza</span>
                        <span className="Label-Description">{item.name}</span>
                        <span className="Second-Label">Tamanho Disponível</span>
                        <span className="Second-Label-Description">{item.size}</span>
                    </div>
                    <div className="Secondary-Container">
                        <span className="Second-Label">Tempo de Preparo</span>
                        <span className="Second-Label-Description">{item.preparationTime}</span>
                        <span className="Second-Label">Valor</span>
                        <span className="Second-Label-Description">{item.price}</span>
                    </div>
                    <div className="Tertiary-Container">
                        <span className="Second-Label">Descrição</span>
                        <span className="Second-Label-Description">{item.description}</span>
                    </div>
                </div>
                <div className="More-Information">
                    <div className="Label-Click">
                        <span className="Label-Description">Mais Informações</span>
                        <LaunchIcon />
                    </div>
                </div>
            </div>
        </>
    );
}

export { ItemDescription };
