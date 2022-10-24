import React from 'react';
import styles from "./fifth.module.css";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

//Assets
import Final1 from '../../../../../assets/landing/cover-final.svg';
import Final2 from '../../../../../assets/landing/final-1.png';
import Final3 from '../../../../../assets/landing/final-2.png';
import Final4 from '../../../../../assets/landing/final-3.png';
import Final5 from '../../../../../assets/landing/final-4.svg';

export function FifthContainer(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Artist className="collage">
                <img className={styles.coverArtist} id={styles.position} alt="Artista portada" src={Final1}></img>
                <img className={styles.artist1} id={styles.position} alt="Artista 2" src={Final2}></img>
                <img className={styles.artist2} id={styles.position} alt="Artista 3" src={Final3}></img>
                <img className={styles.artist3} id={styles.position} alt="Artista 4" src={Final4}></img>
                <img className={styles.artist4} id={styles.position} alt="Artista 5" src={Final5}></img>
            </Artist>
            <Content>
                <motion.h1 
                initial={{
                    opacity: 0,
                    translateY: 35
                }}
                whileInView = {{
                    opacity:1,
                    translateY: 0
                }} 
                transition={{ 
                    delay: 0.5,
                    duration:2,
                    default: { ease: "linear" }
                }}>Somos Cultura Por Todos y Para Todos</motion.h1>
                <motion.p
                initial={{
                    opacity: 0,
                    translateY: 35
                }}
                whileInView = {{
                    opacity:1,
                    translateY: 0
                }} 
                transition={{ 
                    delay: 0.01,
                    duration:2,
                    default: { ease: "linear" }
                }}>La cultura es hoy, hecha por todos y para todos. Somos el inicio de un movimiento de transformación cultural.</motion.p>
                <button onClick={() =>navigate('/preregistro')}>Comenzar ahora</button>
            </Content>
        </Wrapper>

    );

};

const Artist = styled.div`
    width: 1200px;
    height: 1000px;
    position: relative;
    display: block;

    img{
        border-radius: 20px;
        object-fit: cover;
    }
`;

const Wrapper = styled.div`
    font-size: 16px;
    color:white;
    width: 100%;
    height: 105vh;
    overflowx: hidden;
    overflow-y: hidden;
    background: #171717;
    position: relative;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .collage{
        position: absolute;
        margin: 0;
        right: 0;

        @media (max-width: 1760px){
            transform: scale(0.9) translateX(100px);
            transform-origin: top;
            top: 10%;
        }
        @media (max-width: 1600px){
            transform: scale(0.8) translateX(200px);
            transform-origin: top;
            top: 10%;
        }

        @media (max-width: 1500px){
            transform: scale(0.7) translateX(400px);
        }

        @media (max-width: 1430px){
            transform: scale(0.6) translateX(500px);
        }

        @media (max-width: 1360px){
            transform: scale(0.55) translateX(600px);
        }

        @media (max-width: 1280px){
            transform: scale(0.7) translateX(-100px);
            right: auto;
            top: 0px;
            left: 50%;
            margin-left: -600px;
        }

        @media (max-width: 1180px){
            transform: scale(0.65) translateX(0px);
            right: auto;
            top: 0px;
            left: 50%;
            margin-left: -600px;
        }

        @media (max-width: 800px){
            transform: scale(0.6) translateX(120px);
            right: auto;
            top: 50px;
            left: 50%;
            margin-left: -600px;
        }

        @media (max-width: 600px){
            transform: scale(0.5) translateX(150px);
            right: auto;
            top: 80px;
            left: 50%;
            margin-left: -600px;
        }

        @media (max-width: 375px){
            transform: scale(0.45) translateX(150px);
            top: 40px;
        }
    }
`;

const Content = styled.div`
    position: absolute;
    top: 220px;
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
        max-width: 600px;

        background: linear-gradient(104.32deg, #FCF5C4 -2.65%, #DD5387 36.91%, #9C63B7 61.32%, #284C91 101.32%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        @media (max-width: 1280px){
            font-size: 60px;
            max-width: 90%;
            padding-top: 40vh;
        }

        @media (max-width: 800px){
            font-size: 40px;
            max-width: 300px;
            padding-top: 40vh;
        }

        @media (max-width: 600px){
            padding-top: 33vh;
        }

        @media (max-width: 420px){
            padding-top: 30vh;
        }

        @media (max-width: 375px){
            padding-top: 25vh;
        }

        @media (max-height: 600px){
            padding-top: 21vh;
            font-size: 32px;
        }

    }

    p{
        font-weight: normal;
        line-height: 150%;
        max-width: 600px;
        font-size: 21px;

        @media (max-width: 1280px){
            max-width: 80vw;
        }

        @media (max-width: 800px){
            font-size: 18px;
        }

        @media (max-width: 375px){
            font-size: 16px;
        }

        @media (max-height: 600px){
            font-size: 12px;
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
