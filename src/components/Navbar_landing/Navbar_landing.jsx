import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo/Muse Logo Blanco.svg';
import More from '../../assets/icons/more.svg'

export function NavbarLanding() {
    const navigate = useNavigate();
    const [show,setShow] = useState(false);

    return (
        <MenuContainer>
            <img src={Logo} alt="Logo" onClick={() =>navigate('/landing')} draggable="false"/>
            <Menu>
            <li><span onClick={() =>navigate('/landing')}>Inicio</span></li>
                <li><span onClick={() =>navigate('/nosotros')}>Nosotros</span></li>
                <li><span onClick={() =>navigate('/preregistro')}>Registrarse</span></li>
                <li onClick={() =>navigate('/preregistro')}><button>Solicitar demo</button></li>
                <img src={More} alt="Menú desplegable" onClick={() => setShow(!show)} draggable="false"></img>
                <div>
                {
                    show ? <Dropdown>
                        <div>
                            <span onClick={() =>navigate('/landing')}>Inicio</span>
                            <span onClick={() =>navigate('/nosotros')}>Nosotros</span>
                            <span onClick={() =>navigate('/preregistro')}>Registrarse</span>
                        </div>
                    </Dropdown>: null
                }
                </div>
                
            </Menu>
        </MenuContainer>
    );
};

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
    z-index: 2;
    div{
        position: absolute;
        height: auto;
        width: 150px;
        display: block;
        right:25px;
        top: 30px;

        background: rgba(255,255,255,0.02);
        border: 0px;
        font-size: 21px;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.1);
        color: white;
        backdrop-filter: blur(50px);

        span{
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            display: block;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid rgba(255,255,255,0);

            transition: 1s;
            
            :hover {
                border-radius: 10px;
                border: 1px solid rgba(255,255,255,0.5);
                transform: translateY(-2px);
                backdrop-filter: blur(80px);
            }
        }

        @media (min-width: 1600px){
            display: none;
        }
    }

`;

const MenuContainer = styled.div`
    display: flex;
    position: sticky;
    top: 0px;
    z-index: 99;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px 0 100px;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    @media (max-width: 1024px){
        margin: 0 30px;
    }

    @media (max-width: 500px){
        scale: 0.7;
        gap: 100px;
        margin-left: -1vh;
    }

    @media (max-width: 400px){
        scale: 0.6;
        gap: 100px;
        margin-left: -4vh;
    }

    @media (max-width: 430px){
        margin-top: -4vh;
    }

    @media (max-width: 330px){
        gap: 50px;
        margin-top: -5vh;
    }
`;
const Menu = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin: 0 30px 0 100px;
    padding: 0;

    @media (max-width: 1024px){
            margin: 0 30px;
    }
    
    img{
        display: none;
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,0);
        @media (max-width: 1600px){
            display: flex;
        }

        transition: 1s;
        
        :hover {
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.1);
            transform: translateY(-3px);
        }
    }

    li{
        list-style: none;
        margin: 0;
        span{
            text-decoration: none;
            color : white;
            padding: 8px 40px;
            border: 1px solid rgba(255,255,255,0);
            transition: 1s;
            border-radius: 14px;
            font-size: 18px;

            :hover{
                border: 1px solid rgba(255,255,255,0.2)
            }

            @media (max-width:1300px){
                font-size: 16px;
            }
        }

        button{
            background: rgba(255,255,255,0.02);
            border: 0px;
            font-size: 21px;
            padding: 12px 30px;
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.1);
            color: white;
            max-width:280px;
            backdrop-filter: blur(20px);
        
            display: flex;
            gap: 12px;
            justify-content: center;
            align-items: center;
            margin: 0 30px 0 100px;
        
            transition: 1s;
                
            :hover {
                border: 1px solid rgba(255,255,255,0.8);
                transform: translateY(-3px);
            }

            @media (max-width: 1024px){
                margin: 0 30px 0 30px;
            }
        
            @media (max-width:1600px){
                margin: 0 30px 0 30px;
                font-size: 16px;
            }
        }

    }

    @media (max-width: 1600px){
        justify-content: space-between;
        li:nth-child(1),
        li:nth-child(2),
        li:nth-child(3),
        li:nth-child(4){
            display:none;
        }
    }

    @media (max-width: 750px){
        justify-content: space-between;
        li:nth-child(5){
            display:none;
        }
    }
`;

