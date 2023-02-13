import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

function BackGroundCircle(props) {
  return (
    <Container> 
        <Circle3 as={motion.div} viewport={{once:true}} initial={{scale:0,opacity:0}} whileInView={{opacity:1,scale:[3,1,2,1,1.5,1]}} transition={{duration:4,ease:"easeInOut"}}>
            <Circle2 as={motion.div} initial={{opacity:0}} animate={{ opacity:[1,0.1,0.2,0.6,0.4,0.1,1]}} transition={{duration:5,repeat:Infinity,repeatType: "reverse"}}>
                <Circle1 as={motion.div} initial={{opacity:0}} animate={{ opacity:[1,0.4,0.6,0.4,1]}} transition={{duration:4,repeat:Infinity,repeatType: "reverse"}}>
                     
                </Circle1>
            </Circle2>
        </Circle3>

        <Wrapper>
            <img src="images/coding.jpeg"></img>
            <About>
            <First>HELLO WORLD!!</First>
            <Second>I am CHIRAG JAIN</Second>
            <span>
                <Typewriter
                        options={{
                            strings: ['Frontend Developer 💫', 'Competetive Programmer 🌟','Educator Associate'],
                            autoStart: true,
                            loop: true,
                            cursor:"<>",
                        }}
               />
            </span>
            </About>

        </Wrapper>
        
        
        
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div> */}
    </Container>
  )
}

const Container = styled.div`
    display : flex;
    align-items:center;
    justify-content: center;
    align-items:space-around;
    height:100vh;
    width:100vw;
`;


const Circle3 = styled.div`
    border-radius: 50%;
    border: 0.2px solid #1f1f05;
    width: 450px;
    height: 450px;
    background:transparent;
    display : flex;
    align-items:center;
    justify-content: center;
`;

const Circle2 = styled.div`    
    border-radius: 50%;
    border: 0.2px solid grey;
    width: 400px;
    height: 400px;
    background:transparent;
    display : flex;
    align-items:center;
    justify-content: center;
`;

const Circle1 = styled.div`
    border-radius: 50%;
    border: 0.2px solid #3d390a;
    width: 350px;
    height: 350px;
    background:transparent;
    display : flex;
    align-items:center;
    justify-content: center;
`;

const Wrapper = styled.div`
    position:absolute;
    top:27%;
    height: 60%;
    width: 85%;
    // border:1px solid green;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    img{
        height: 34%;
        width: 38%;
        border-radius:50%;
    }
    @media only screen and (max-width: 410px) {
        img{
            height:32%;
        }
        
        width: 90%;
    }
`;

const About = styled.div`
    height:60%;
    width:100%;
    // border: 1px solid green;
    span{
        display:flex;
        margin-top: 12px;
        height: 20%;
        justify-content:center;
        align-items:center;
        font-size: 2.4rem;
    }

`;

const First = styled.div`
    color:grey;
    height:20%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 2rem;
`;

const Second = styled.div`
    color:grey;
    width:100%;
    height:15%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 4rem;
    color: transparent;
        /* stroke: wheat; */
    -webkit-text-stroke: 0.2px white;
    font-weight:700;
    @media only screen and (max-width: 410px) {
        font-size: 3.7rem;
    }
`;
export default BackGroundCircle