import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

function BackGroundCircle(props) {
  return (
    <Container> 
         {/* <Social as={motion.div} initial={{x:-400}} viewport={{once:true}} whileInView={{x:10}} transition={{duration:4.5}}>
                <motion.ul>
                <li><a target="_blank" href="https://leetcode.com/Chirag_dungarwal/">Leetcode<img src={'/images/leetcode.svg'}></img></a></li>
                <li><a target="_blank"  href="https://github.com/Chirag200218">Github <img src={'/images/github.png'}></img></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/chirag-jain-8871aa1b4/">Linkedin <img src={'/images/linkedin.png'}></img></a></li>
                </motion.ul>
            </Social> */}
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
const Social = styled.div`
    position:absolute;
    height:100px;
    width:100px;
    margin-top:10px;
    margin-left:20px;
    cursor:pointer;
    z-index:2;
    a {
        color: #fff;
        text-decoration: none;
      }
    ul{
        padding: 0px;
        transform: translate(-270px, 0);
    }
    ul li {
        display: block;
        margin: 5px;
        background: rgba(0, 0, 0, 0.36);
        width: 300px;
        text-align: right;
        padding: 10px;
        border-radius: 0 30px 30px 0;
        transition: all 1s;
      }
    ul li:hover {
        transform: translate(110px, 0);
        background: rgba(255, 255, 255, 0.4);
      }
    ul li:hover a {
        color: #000;
      }
    ul li:hover i {
        color: #fff;
        background: rgba(0, 0, 0, 0.36);
        transform: rotate(360deg);
        transition: all 1s;
      }
    ul li img {
        margin-left: 10px;
        color: #000;
        background: #fff;
        padding: 10px;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        font-size: 20px;
        background: #ffffff;
        transform: rotate(0deg);
      }
      
    //   body {
    //     background: #4F8B89;
    //     color: #fff;
    //     font-family: 'Raleway', sans-serif;
    //   }
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
        height: 160px;
        width: 165px;
        border-radius:50%;
    }
    @media only screen and (max-width: 410px) {
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
    font-weight:bold;
    font-family: sans-serif;
    @media only screen and (max-width: 410px) {
        font-size: 3.7rem;
    }
`;
export default BackGroundCircle