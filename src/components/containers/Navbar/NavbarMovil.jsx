import styled from './NavbarMovil.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logoMuse from '../../assets/icons/logoMuse_Navbar.svg';
import iconoBusqueda from '../../assets/icons/buscar_icono.svg';
import home from '../../assets/icons/home_icono.svg';
import homeSelected from '../../assets/icons/home_selected_icono.svg';
import explorar from '../../assets/icons/explorar_icono.svg';
import explorarSelected from '../../assets/icons/explorar_selected_icono.svg';
import carrito from '../../assets/icons/carrito_icono.svg';
import carritoSelected from '../../assets/icons/carrito_selected_icono.svg';
import notificaciones from '../../assets/icons/notificaciones_icono.svg';
import perfil from '../../assets/diego.png';

export function NavbarMovil() {
    const navigate = useNavigate();

    return (
        <>
            {/* <div className={styled.RellenoNav}></div> */}
            <header className={styled.Cabezera}>
                <nav>

                    <section className={styled.LogoBusqueda_cont}>
                        <div className={styled.Logo} onClick={() => navigate('/')} >
                            <img src={logoMuse} alt="Muse" draggable="false" />
                            <span className={styled.TextoLogo}>Muse</span>
                        </div>
                        <div className={styled.BarraBusqueda_cont}>
                            <input type="text" className={styled.BarraBusqueda}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        navigate('/buscar')
                                    }
                                }}
                            />
                            <button onClick={() => navigate('/buscar')}><img src={iconoBusqueda} alt="buscar" draggable="false" /></button>
                        </div>
                    </section>


                </nav>
            </header>
        </>
    );
}

export const Menu = () => {
    const goTo = useNavigate();
    const [menuSelected, setSelectMenu]= useState('/'); //  / = home
    const navigate = (url) => {
        setSelectMenu(url);
        goTo(url);
    }

    return (
        
            <div className={styled.Menu_cont}>
                <div>
                    <ul className={styled.ItemsNav}>
                        <li onClick={() => navigate('/')}><img src={((menuSelected === '/' ? homeSelected : home))} alt="home" draggable="false" /></li>
                        <li onClick={() => navigate('/explorar')}><img src={(menuSelected === '/explorar' ? explorarSelected : explorar) } alt="explorar" draggable="false" /></li>
                        <li onClick={() => navigate('/carrito')}><img src={(menuSelected === '/carrito' ? carritoSelected : carrito) } alt="carrito" draggable="false" /></li>
                        <li onClick={() => navigate('/notificaciones')}><img src={notificaciones} alt="notificaciones" draggable="false" /></li>
                        <li onClick={() => navigate('/mi-perfil')}><img src={perfil} alt="mi perfil" className={styled.PerfilImagen} draggable="false" /></li>
                    </ul>
                </div>
            </div>


    );
}

