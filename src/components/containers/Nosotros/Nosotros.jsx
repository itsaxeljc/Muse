import React from 'react';
import styled from 'styled-components';
//Componentes
import {NavbarLanding} from '../../Navbar_landing/Navbar_landing';
import {AnimatedText} from './components/animatedText/animatedText';
import {SecondContainer} from './components/second/second';
import {ThirdContainer} from './components/third/thrid';
import { FourthContainer } from './components/fourth/fourth';
import { FifthContainer } from './components/fifth/fifth';



//motion.component animate = {{}} transition = {{}}
//Transition types: tween (duration), spring (bounce), inertia (velocity)
//Transition properties: repeat: Infinity
//whileHover
//whileDrag

export function NosotrosContainer(props) {
    return (
        <Wrapper>
            <Content>
            <NavbarLanding></NavbarLanding>
            <ContainerY id="main">
                <AnimatedText text="¡Hola, Durango!" text2="Somos Muse" ></AnimatedText>
                <SecondContainer></SecondContainer>
                <ThirdContainer></ThirdContainer>
                <FourthContainer></FourthContainer>
                <FifthContainer></FifthContainer>
            </ContainerY>
            </Content>
        </Wrapper>
        
    );

};

const Wrapper = styled.div`
    font-size: 16px;
    color:white;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    background: #171717;
`;

const Content = styled.div`
    position: absolute;
    top: 30px;
    width: 100vw;
    height: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap:80px;
    
    @media (max-width: 1200px){
        gap: 40px;
    }

    @media (max-height: 850px){
        gap: 20px;
    }

    .progress {
        position: fixed;
        left: 0;
        right: 0;
        height: 5px;
        background: white;
        bottom: 100px;
      }
`;

const ContainerY = styled.div`
    position: relative;
    display: inline-block;
    height: 100%;
`;

// const ContainerX = styled.div`
//     white-space: nowrap;
//     overflow-x: scroll;
// `;