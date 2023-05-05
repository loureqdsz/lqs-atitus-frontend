import './menuPage.css';
import { Header } from '../../Components/Header/index.js'
import { Footer } from '../../Components/Footer/index.js'
import { CardapioList } from '../../Components/List/index.js'

const MenuPage = () => {
    return (
        <div className="Menu">
            <Header />
            <div className="Menu-Content">
                <div className="Menu-Content-2">
                    <CardapioList />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export { MenuPage };
