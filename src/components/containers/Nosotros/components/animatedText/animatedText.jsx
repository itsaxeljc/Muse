import React,{ useEffect, useState } from 'react';
import { useInterval } from "react-use";
import styled from 'styled-components';



export function AnimatedText(props) {
    const phrase = [props.text,props.text2];
    const [word, setWord] = useState(phrase[0]);
    const [count,setCount] = useState(0);
    const [play, setPlay] = useState(false);

    useInterval(
        () => {
            setWord(phrase[0]);
            setCount(count + 1);

            if(count == 1){
                setCount(0);
                setWord(phrase[1]);
            }
        },
        play ? 6000 : null
    );

    useEffect(() => {
        const timer = setTimeout(() =>{
            setWord(phrase[1]);
            setPlay(true);
        },6000)

        return () => clearTimeout(timer)
    }, [])

    
    return (
        <Text>
            <span>{word}</span>
        </Text>
    );

};

const Text = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    span{
        font-weight: 700;
        font-size: 96px;
        line-height: 150%;
        text-align: center;
        margin-top: 10vh;; 
        display: inline-block;

    background: linear-gradient(
      104.32deg,
      #fcf5c4 -2.65%,
      #dd5387 36.91%,
      #9c63b7 61.32%,
      #284c91 101.32%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

        opacity: 0;
        animation-name: animation;
        animation-duration: 6s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        @keyframes animation {
            0% { 
                opacity: 0; 
                transform: 
                    translateY(0px);
                filter: blur(10px);
                background-position: 0 50%;
            }
            25% { 
                opacity: 1;
                filter: blur(0px);
                background-position: 50% 50%;
            }
            75% { 
                opacity: 1;
                filter: blur(0px);
                background-position: 100% 50%;
            }
            100% { 
                opacity: 0; 
                transform: 
                    translateY(-25px);
                filter: blur(10px);
                background-position: 0 50%;
            }
        }
        @media (max-width: 480px){
            font-size: 76px;
        }
        @media (max-width: 340px){
            font-size: 56px;
        }
    }
`;
