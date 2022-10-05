import React, {useRef, useState } from 'react';
import styles from "./preregistro.module.css";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Cover from '../../assets/landing/Cover.png'
import {NavbarLanding} from '../Navbar_landing/Navbar_landing';



//Assets

export function PreregistroContainer(props) {
    const navigate = useNavigate();

    const [show, setShow] = useState(true);
    const [showI, setShowI] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_16onv2d', 'template_woxaebi', form.current, 'OSgc5tiIM6EoNRXvP')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <Wrapper>
            <NavbarLanding></NavbarLanding>
            <Artist className="collage">
                <img alt="Artista portada" src={Cover}></img>
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
                }}>Únete hoy</motion.h1>
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
                }}>¿Estás listo para formar parte de este movimiento de transformación cultural. Realiza tu preregistro hoy y obtén una notificación cuando Muse esté listo.</motion.p>
                {show ? <form ref={form} onSubmit={sendEmail}>
                    <label>Nombre</label>
                    <input type="text" name="from_name" />
                    <label>Correo electrónico</label>
                    <input type="email" name="user_email" />
                    <label>Mensaje</label>
                    <textarea name="message" />
                    <input type="submit" value="Enviar" 
                    onClick={() => {
                        setShow(!show);
                        setShowI(!showI);
                    }}/>
                </form> : null}
                {showI ? 
                    <p>Gracias por escribirnos.</p> : null}
            </Content>
        </Wrapper>

    );

};

const Artist = styled.div`
    width: 1200px;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        object-fit: cover;
        align-self: flex-center;
    }
`;

const Wrapper = styled.div`
    margin-top: 30px;
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
           display: none;
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
            transform: scale(0.6) translateX(150px);
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

const Mensaje = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    // font
        font-family: "Inter",Helvetica;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
        user-select: none;
        margin: 0 30px 0 100px;

        @media (max-width: 1024px){
            margin: 0 30px 0 30px;
        }
    textarea{
        width: 500px;
        min-width: 300px;
        margin-left: 0;
        height: 100px;
        min-height: 48px;
        padding: 0 0 0 10px;
        background: rgba(116, 116, 116, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(40px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 10px;
        // font
        font-family: "Inter",Helvetica;
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        color: #ffffff;
        user-select: none;

        //transition
        transition: 1s;

        &:focus {
            border: 1px solid rgba(255, 255, 255, 0.8);
        }

        @media (max-width:875px){
            width: 80%;
        }

        @media (max-width:375px){
            scale: 0.8;
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
    gap:40px;
    
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
            max-width: 400px;
        }

        @media (max-width: 800px){
            font-size: 40px;
            max-width: 300px;
        }

        @media (max-height: 600px){
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

    h1,p,button,input{
        margin: 0 30px 0 100px;

        @media (max-width: 1024px){
            margin: 0 30px 0 30px;
        }
    }

    form{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 80%;
        font-size: 16px;

        textarea{
            width: 500px;
            min-width: 500px;
            height: 100px;
            margin-left:100px;
            min-height: 58px;
            padding: 0 0 0 10px;
            background: rgba(116, 116, 116, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(40px);
            border-radius: 10px;
            // font
            font-family: "Inter",Helvetica;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: #ffffff;
            user-select: none;
            margin-bottom: 30px;
    
            //transition
            transition: 1s;
    
            &:focus {
                border: 1px solid rgba(255, 255, 255, 0.8);
            }
        }

        // input
    input {
        width: 500px;
        min-width: 300px;
        height: 100%;
        min-height: 28px;
        margin-bottom: 30px;
        padding: 0 0 0 10px;
        background: rgba(116, 116, 116, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(40px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 10px;
        // font
        font-family: "Inter",Helvetica;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
        user-select: none;

        //transition
        transition: 1s;

        &:focus {
            border: 1px solid rgba(255, 255, 255, 0.8);
        }

        @media (max-width:875px){
            width: 80%;
        }

        @media (max-width:375px){
            scale: 0.8;
            margin-left: -1vh;
        }
    }

    input::placeholder {
        color: #d7d7d7;
    }

    input:focus {
        outline: none;
    }

    label{
        margin-left: 100px;
        margin-bottom: 5px;
    }
}
`;
