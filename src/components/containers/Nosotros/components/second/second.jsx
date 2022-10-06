import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import { VideoCloudinary } from "./components/videoCloudinary/videoCloudinary";
import { motion } from "framer-motion";
import Nous from "../../../../../assets/landing/nosotros.jpg";


export function SecondContainer(props) {

    return (
        <Wrapper>
            <Spline className="spline" scene="https://prod.spline.design/jyYz8JohihQqSFXV/scene.splinecode" />
            <motion.div className="video"
            initial={{
                opacity: 0
            }}
            whileInView = {{
                opacity:1
            }} transition = {{
                delay: 0.3,
                default: { ease: "linear" }
            }}>
                <img src={Nous}></img>
            </motion.div>
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
                }}>Somos Muse</motion.h1>
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
                }}>Una plataforma que busca transformar la manera en que la tecnología y la cultura se fusionan para crear un espacio seguro donde artistas independientes y organismos culturales compartan la riqueza de la identidad cultural de nuestra región.</motion.p>
            </Content>
        </Wrapper>

    );

};

const Wrapper = styled.div`
    font-size: 16px;
    color:white;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    background: #171717;
    position: relative;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .video{
        position: absolute;
        margin: 0;
        right: 120px;
        top: 240px;
        width: 40vw;
        height: 491px;
        z-index: 1;
        background-image: url({{Nous}});
        background-size: cover;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }

        @media (max-width: 1500px){
            transform: scale(0.9) translateX(60px) translateY(150px);
            transform-origin: top;
            top: 10%;
        }

        @media (max-width: 1300px){
            transform: scale(0.8) translateX(100px) translateY(180px);
        }

        @media (max-width: 1150px){
            transform: scale(0.5) translateX(-100%);
            right: auto;
            width: 150vw;
            height: 65vh;
            top: 18vh;
            left: 50%;
        }

        @media and (max-width: 1024px), and (max-height: 1366px){
            left: 49vw;
            width: 170vw;
            top: 15vh;
        }

        @media (max-height: 768px){
            height: 90vh;
        }

        @media and (max-height: 800px), and (max-width: 1150px){
            height: 75vh;
            top: 23vh;
        }

        @media (max-width: 800px){
            transform: scale(0.5) translateX(-100%);
            right: auto;
            width: 150vw;
            height: 65vh;
            top: 18vh;
            left: 50%;
        }

        @media (max-width: 600px){
            transform: scale(0.5) translateX(-100%);
            right: auto;
            width: 150vw;
            top: 18vh;
            left: 50%;
        }

        @media (max-width: 420px){
            transform: scale(0.45) translateX(-85vh);
            right: auto;
            width: 180vw;
            top: 20vh;
            left: 43%;
        }

        @media (max-width: 375px){
            transform: scale(0.45) translateX(-85vh);
            right: auto;
            width: 180vw;
            top: 18vh;
            left: 43%;
        }

        @media and (max-width: 480px), and (max-height: 850px){
            left: 39%;
        }

        @media and (max-width: 480px), and (max-height: 812px){
            left: 43%;
        }

        @media and (max-width: 450px), and (max-height: 786px){
            left: 37%;
        }

        @media and (max-width: 414px), and (max-height: 736px){
            left: 28vw;
            top: 23vh;
        }

        @media and (max-width: 320px), and (max-height: 580px){
            left: 28vw;
            top: 28vh;
        }

    }

    .spline{
        position: absolute;
        margin: 0;
        right: 0;
        @media (max-width: 1500px){
            transform: scale(0.8) translateX(200px);
            transform-origin: top;
            top: 10%;
        }

        @media (max-width: 1300px){
            transform: scale(0.7) translateX(400px);
        }

        @media (max-width: 1150px){
            transform: scale(0.7) translateX(-100px);
            right: auto;
            top: -100px;
            left: 50%;
            margin-left: -600px;
        }

        @media (max-width: 800px){
            transform: scale(0.7) translateX(-100px);
            right: auto;
            top: -100px;
            left: 50%;
            margin-left: -600px;
        }

        @media (max-width: 600px){
            transform: scale(0.5) translateX(-100px);
            right: auto;
            left: 50%;
            margin-left: -600px;
        }

        @media (max-width: 375px){
            transform: scale(0.45) translateX(-50px);
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
        max-width: 500px;

        background: linear-gradient(104.32deg, #FCF5C4 -2.65%, #DD5387 36.91%, #9C63B7 61.32%, #284C91 101.32%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        @media (max-width: 1150px){
            font-size: 60px;
            max-width: 400px;
            padding-top: 35vh;
        }

        @media (max-width: 800px){
            font-size: 40px;
            max-width: 300px;
            padding-top: 35vh;
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

        @media (max-width: 1150px){
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

    h1,p{
        margin: 0 30px 0 100px;

        @media (max-width: 1024px){
            margin: 0 30px 0 30px;
        }
    }
`;
