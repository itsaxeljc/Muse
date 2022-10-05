import styled from './NavBarPost.module.css';

import returnArrow from '../../assets/icons/arrogReturn.svg';
import search from '../../assets/icons/search.svg';
import options from '../../assets/icons/options_icon.svg';

export const NavBarPost = ({buttonPushed}) => {
    return (
    <nav className={styled.navBar_cont}>
        <div className={styled.navBar}>
            <img src={returnArrow} alt="Regresar" className={styled.imgReturn} onClick={buttonPushed} />
            <div>
                <img src={search} alt="Buscar" className={styled.imgBuscar} />
                <img src={options} alt="Opciones" className={styled.imgOptions} />
            </div>
        </div>
    </nav>
    );
}