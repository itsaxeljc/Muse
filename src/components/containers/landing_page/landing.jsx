import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import Facebook from '../../../assets/logo/facebook_landing.svg';
import Instagram from '../../../assets/logo/insta_landing.svg';
import Tiktok from '../../../assets/logo/tiktok_landing.svg';
import { useNavigate } from 'react-router-dom';

//Componentes
import {NavbarLanding} from '../../Navbar_landing/Navbar_landing';

export function LandingContainer(props) {
    const navigate = useNavigate();

    return (
        <Wrapper >
                <Spline className="spline" scene="https://prod.spline.design/Db8beaaeDVYHKeJw/scene.splinecode" />
                <Content>
                <NavbarLanding></NavbarLanding>
                    <h1>Descubre la cultura local</h1>
                    <p>Explora la cultura en tu ciudad, descubre eventos, compra arte y apoya artistas independientes.</p>
                    <button onClick={() =>navigate('/inicio')}>Comenzar ahora</button>
                </Content>
                <SocialLinks>
                    <div/>
                    <a href="https://www.facebook.com/museartmx"><img src={Facebook} alt="Facebook" draggable="false"></img></a>
                    <a href="https://www.instagram.com/museartmx"><img src={Instagram} alt="Instagram" draggable="false"></img></a>
                    <a href="https://www.tiktok.com/@museartmx"><img src={Tiktok} alt="TikTok" draggable="false"></img></a>
                </SocialLinks>
            </Wrapper>
            
    );
}

const Wrapper = styled.div`
    font-size: 16px;
    color:white;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #171717;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .spline{
        position: absolute;
        margin: 0;
        top: 0;
        right: 0;
        z-index: 1;
        

        @media (max-width: 1500px){
            transform: scale(0.8) translateX(200px);
            transform-origin: top;
            top: 10%;
        }

        @media (max-width: 1300px){
            transform: scale(0.7) translateX(400px);
        }

        @media (max-width: 1150px){
            transform: scale(0.7) translateX(750px);
        }

        @media (max-width: 760px){
            transform: scale(0.5) translateX(-90px);
            right: auto;
            left: 50%;
            margin-left: -600px;
            top: 5%;
        }

        @media (max-width: 375px){
            transform: scale(0.45);
        }

        @media (max-height: 750px){
            transform: scale(0.4);
            top: 10vh;
        }

        @media (max-width: 330px){
            transform: scale(0.3);
            top: 10vh;
        }
    }
`;

const Content = styled.div`
    position: absolute;
    top: 30px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap:80px;
    
    @media (max-width: 1200px){
        gap: 40px;
    }

    @media (max-height: 850px){
        gap: 20px;
    }

    h1{
        font-weight: bold;
        font-size: 70px;
        margin: 0;
        max-width: 500px;

        @media (max-width: 1024px){
            font-size: 60px;
            max-width: 400px;
            z-index: 2;
        }

        @media (max-width: 800px){
            font-size: 40px;
            max-width: 300px;
            z-index: 2;
        }

        @media (max-width: 760px){
            padding-top: 250px;
        }
        @media (max-width: 375px){
            padding-top: 200px;
        }

        @media (max-height: 750px){
            padding-top: 200px;
            font-size: 34px;
        }

        @media (max-height: 580px){
            padding-top: 100px;
            font-size: 28px;
        }

        @media (max-height: 750px) and (max-width: 375px){
            font-size: 28px;
        }
    }

    p{
        font-weight: normal;
        line-height: 150%;
        max-width: 380px;
        font-size: 21px;

        @media (max-width: 1024px){
            z-index: 2;
        }

        @media (max-height: 750px) and (max-width: 375px){
            font-size: 16px;
        }

        @media (max-height: 580px){
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

        transition: 1s;
        
        :hover {
            border: 1px solid rgba(255,255,255,0.8);
            transform: translateY(-3px);
        }

        @media (max-height: 750px) and (max-width: 375px){
            font-size: 18px;
        }

        @media (max-height: 580px){
            font-size: 16px;
        }
    }

    h1,p,button{
        margin: 0 30px 0 100px;

        @media (max-width: 1024px){
            margin: 0 30px 0 30px;
        }
    }
`;

const SocialLinks = styled.div`
    position: absolute;
    top: 150px;
    left: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    div{
        width: 1px;
        height: 500px;
        background: linear-gradient(180deg, #FCF5C4 0%, #DD5387 38.05%, #9C63B7 61.53%, #284C91 100%);
    }

    img{
        @media (max-width: 1200px){
            display: none;
        }
    }

    @media (max-width: 1024px){
        display: none;
    }
`;