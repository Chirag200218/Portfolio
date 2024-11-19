import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import BackGroundCircle from './BackGroundCircle';
import {motion} from "framer-motion";

function TopPage() {
     
  return (
    <Container>
        <Deskstop>
            <Social as={motion.div} initial={{x:-400}} viewport={{once:true}} whileInView={{x:10}} transition={{duration:4.5}}>
                <motion.ul>
                <li><a target="_blank" href="https://leetcode.com/Chirag_dungarwal/">Leetcode<img src={'/images/leetcode.svg'}></img></a></li>
                <li><a target="_blank"  href="https://github.com/Chirag200218">Github <img src={'/images/github.png'}></img></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/chirag-jain-8871aa1b4/">Linkedin <img src={'/images/linked.png'}></img></a></li>
                </motion.ul>
            </Social>
            <BackGround>
                <motion.div
                    initial={{opacity:0,scale:1.4}} animate={{opacity:1,scale:1}}
                    transition= {{ duration:3}} 
                >
                <p>Hello</p>
                <p>World !!</p>
                </motion.div>
            </BackGround>
            <Content className="animate__animated animate__lightSpeedInLeft animate__delay-2s">
                    <div >Hi I'm</div>
                    <div>Chirag Jain</div>
                    <span>
                        <Typewriter
                            style={{width:"600px"}}
                            options={{
                                strings: [' Full Stack Developer 💫', ' Competetive Programmer 🌟',' Educator Associate🥸'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
            </Content>
        </Deskstop>
       
        <Mobile>
            <BackGroundCircle/>
        </Mobile>
      

    </Container>
  )
}

const Deskstop = styled.div`
    height:100vh;
    width:100vw;
    position:relative;
    @media only screen and (max-width: 550px) {
        display:none;
    }
    
`;
const Social = styled.div`
    position:absolute;
    height:500px;
    width:500px;
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
        padding: 8px;
        border-radius: 50%;
        width: 48px;
        height:48px;
        font-size: 12px;
        background: #ffffff;
        transform: rotate(0deg);
      }
    
`;
const Container = styled.div`
    position:relative;
    scroll-snap-align: start;
    height:100vh;
    width:100vw; 
`;
const BackGround =  styled.div`
    position: absolute;
    display:flex;
    align-items:center;
    top: 0%;
    left: 2%;
    height: 100vh;
    overflow: hidden;
    width: 90vw;
    // font-weight:700;
    z-index:-1;
    div{
        font-size: 70rem;
        font-weight: 700;
        color: transparent;
        text-shadow: 0.02em 0.02em 0.01em rgb(0 0 0 / 25%), 0 0 0 #1f1d1d;
        -webkit-text-stroke: 0.5px #343434;
        p{
            line-height: 1;
            padding: 0;
            margin: 0;
        }
    }
    @media only screen and (max-width: 3000px) {
        div {
            font-size: 55rem;
        }
    }
    @media only screen and (max-width: 2450px) {
        div {
            font-size: 48rem;
        }
    }
    @media only screen and (max-width: 2150px) {
        div {
            font-size: 40rem;
        }
    }
    @media only screen and (max-width: 1700px) {
        div {
            font-size: 34rem;
        }
    }
    @media only screen and (max-width: 1450px) {
        div {
            font-size: 28rem;
        }
    }
    @media only screen and (max-width: 1300px) {
        div {
            font-size: 24rem;
        }
    }
    @media only screen and (max-width: 1150px) {
        div {
            font-size: 24rem;
        }
    }
    @media only screen and (max-width: 1025px) {
        div {
            font-size: 22rem;
        }
    }
`;
 

const Content = styled.div`
    position: absolute;
    top: 24%;
    left: 8%;
    height: fit-content;
    width: 100%;
    color: white;
    font-size: 25rem;
    font-family: emoji;
    font-weight: 700;
    color: rgb(243,243,243);
    div{
        display: flex;
        align-items: center;
        color: transparent;    
        line-height: 1.2;
        padding: 0;
        margin: 0;
        /* stroke: wheat; */
        -webkit-text-stroke: 0.7px #b8b8b8;  //#e9b171;  #2d9687
    }
    span{
        font-size: 4rem;
        // font-family: 'Titillium Web', sans-serif;
        
        span{
            font-family: 'Montserrat', sans-serif;
            -webkit-text-stroke: 0px white;
            color:#e0c1a9;
        } 
    }

    @media only screen and (max-width: 3000px) {
        div {
            font-size: 22rem;
        }
    }
    @media only screen and (max-width: 2450px) {
        div {
            font-size: 17rem;
        }
    }
    @media only screen and (max-width: 2150px) {
        div {
            font-size: 17rem;
        }
    }
    @media only screen and (max-width: 1700px) {
        div {
            font-size: 15rem;
        }
    }
    @media only screen and (max-width: 1450px) {
        div {
            font-size: 12rem;
        }
    }
    @media only screen and (max-width: 1300px) {
        div {
            font-size: 10rem;
        }
    }
    @media only screen and (max-width: 1150px) {
        div {
            font-size: 9rem;
        }
    }
    
    @media only screen and (max-width: 769px) {
        div{
            font-size: 6rem;
        }
        span{
            font-size: 2.5rem; 
        }
    }
`;

const Mobile = styled.div`
    display:none;
    @media only screen and (max-width: 550px) {
        display:block;
    }
`;
export default TopPage