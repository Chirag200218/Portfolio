import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
 import NavBar from './NavBar_Section.js/NavBar';
import BackGroundCircle from './BackGroundCircle';
import {motion} from "framer-motion";
import {useState} from "react";

function TopPage() {
    const[curr,setCurr] = useState(1);
    const handleHover = (e,id)=>{
        console.log("enter")
        let arr =document.getElementById(id+"a");
        let irr = document.getElementById(id+"I");
        let crr = document.getElementById(id+"II");
        irr.style.display="block";
        arr.style.display="flex";
        crr.style.display="none";
    }

    const handleEffect = (e,id)=>{
        console.log("remove")
        let arr =document.getElementById(id+"a");
        let irr = document.getElementById(id+"I");
        let crr = document.getElementById(id+"II");
        irr.style.display="none";
        arr.style.display="none";
        crr.style.display="block";
    }

     
  return (
    <Container>
        {/* <Cards>
            <Card1
             as={motion.div} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1,rotate:"8deg"}} transition={{delay:3,duration:2}}
              onMouseEnter={(e)=>handleHover(e,1)} onMouseLeave={(e)=>handleEffect(e,1)}>
                <img id="1II" src="images/leetcodeImg.png"></img>
                <img id="1I" src="images/leetcode2.png"></img>
                <div id="1a">Has Solved 500+ problems on leetcode and currently ranked under top20% leetcode users globally.</div>
            </Card1>
            <Card2 
             as={motion.div} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1,rotate:"-6deg"}} transition={{delay:3,duration:2}}
             onMouseEnter={(e)=>handleHover(e,2)} onMouseLeave={(e)=>handleEffect(e,2)}>
                <img className='rotate3D' id="2II" src="images/teacherImg.png"></img>
                <img id="2I" src="images/zoom.jpg"></img>
                <div id="2a">Worked as Educator Associate at Geekster</div>
            </Card2>
            <Card3 
             as={motion.div} initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1,rotate:"14deg"}} transition={{delay:3,duration:2}}
            onMouseEnter={(e)=>handleHover(e,3)} onMouseLeave={(e)=>handleEffect(e,3)}>
                <img id="3II" src="images/frontendImg.png"></img>
                <img id="3I" src="images/front1.png"></img>
                <div id="3a">Currently working as Frontend Intern at Geekster</div>
            </Card3>
        </Cards> */}
        <Deskstop>
            <BackGround>
                <motion.h1
                    initial={{opacity:0,scale:1.4}} animate={{opacity:1,scale:1}}
                    transition= {{ duration:3}} 
                >
                Hello World !!</motion.h1>
            </BackGround>
            <Content className="animate__animated animate__lightSpeedInLeft animate__delay-2s">
                    <div >Hi I'm</div>
                    <div>Chirag Jain</div>
                    <span>
                        <Typewriter
                            style={{width:"600px"}}
                            options={{
                                strings: [' Frontend Developer 💫', ' Competetive Programmer 🌟',' Educator Associate🥸'],
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
    @media only screen and (max-width: 426px) {
        display:none;
    }
    
`;
const Container = styled.div`
    position:relative;
    scroll-snap-align: start;
    // background-color: #0b0a0a;
    height:100vh;
    width:100vw;
    // 
`;
const BackGround =  styled.div`
    position: absolute;
    top: 0%;
    left: 2%;
    height: 100vh;
    overflow: hidden;
    width: 90vw;
    // font-weight:700;
    z-index:-1;
    h1{
        font-size: 30rem;
        font-weight: 700;
        color: transparent;
        /* text-shadow:0.01em 0.01em 0.02em rgb(0 0 0 / 25%), 0 0 0 #111111;  #191919*/
        text-shadow: 0.02em 0.02em 0.01em rgb(0 0 0 / 25%), 0 0 0 #1f1d1d;
        -webkit-text-stroke: 0.5px #343434;
    }
    @media only screen and (max-width: 1025px) {
        h1 {
            font-size: 28rem;
        }
      }

    @media only screen and (max-width: 769px) {
        h1 {
            font-size: 24rem;
        }
      }

`;


const Cards = styled.div`
    position: absolute;
    height: 31rem;
    width: 45rem;
    top: 6rem;
    right: 10rem;
    z-index:2;
    // border: 0.5px solid #343434;
    @media only screen and (max-width: 1030px) {
        height: 33rem;
        width: 33rem;
        top: 10rem;
        right: 0rem;
        display:flex;
        flex-direction:column;
        justify-content: space-around;
    }
    @media only screen and (max-width: 770px) {
         display:none;
    }
`;
const Card1 = styled.div`
    position: absolute;
    height: 80%;
    width: 40%;
    left: 25%;
    transform: rotate(8deg);
    border: 0.5px solid #343434;
    background: transparent;
    
    // opacity:0.5;
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    Img:nth-of-type(1){
        height: 25%;
        width: 35%;
        // filter: grayscale(1);
        filter: contrast(0.1);
        position: absolute;
        top: 30%;
        left: 30%;
        
        animation-name: rotateD;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
        animation-direction: reverse;
        @keyframes rotateD {
            0%{
                scale:0.8;
                transform: rotate3d(0, 1, 0,0deg);
            }
            25%{
                scale:1;
                transform: rotate3d(0, 1, 0,90deg);
            }
            50%{
                scale:1;
                transform: rotate3d(0, 1, 0,180deg);
            }
            75%{
                scale:0.8;
                transform: rotate3d(0, 1, 0,270deg);
            }
            100%{
                scale:1;
                transform: rotate3d(0, 1, 0,360deg);
            }
        }
    }
    Img:nth-of-type(2){
        display:none;
        position:absolute;
        height: 100%;
        width: 100%;
        // filter:brightness(0.5);
        &:hover{
            opacity:0.4;
             
        }
    }
    div{
        display:none;
        height: 100%;
        width: 100%;
        text-align: center;
        // display: flex;
        align-items: center;
         
        font-style: oblique;
        font-weight: 700;
        color:black;
        color: black;
        font-size: 2rem;
        -webkit-text-stroke: 0.7px white;
        // text-shadow: 0px 2px 20px rgba(203, 213, 43, 0.53);
        text-shadow: 0px 0px 5px #fea314;
    }
     
    &:hover {
        z-index:2;
        width:50%;
        height:80%;
        cursor:pointer;
        transform: rotate(0deg);
    }

    @media only screen and (max-width: 1025px) {
        //display:none;
        height:70%;
        width:40%;
        left:30%;
    }
    @media only screen and (max-width: 770px) {
        display:none;
   }
`;
const Card2 = styled.div`
    position: absolute;
    height: 80%;
    width: 40%;
    left: -5%;
    top: 14%;
    // opacity:0.5;
    transform: rotate(-6deg);
    border: 0.5px solid #343434;
    background: transparent;
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    &:hover {
        z-index:2;
        width:50%;
        height:80%;
        cursor:pointer;
        transform: rotate(0deg);
        transform: translateX(10px);
    }
    Img:nth-of-type(1){
        height: 22%;
        width: 30%;    
        position: absolute;
        top: 30%;
        filter: contrast(0.5);
        left: 30%;
        &:hover{
            display:none;
        }

        animation-name: rotateD;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
        animation-direction: reverse;
        @keyframes rotateD {
            0%{
                scale:0.8;
                transform: rotate3d(0, 1, 0,0deg);
            }
            25%{
                scale:1;
                transform: rotate3d(0, 1, 0,90deg);
            }
            50%{
                scale:1;
                transform: rotate3d(0, 1, 0,180deg);
            }
            75%{
                scale:0.8;
                transform: rotate3d(0, 1, 0,270deg);
            }
            100%{
                scale:1;
                transform: rotate3d(0, 1, 0,360deg);
            }
        }
    }
    Img:nth-of-type(2){
        display:none;
        position:absolute;
        height: 100%;
        background-position: center; 
        width: 100%;
        // filter:brightness(0.5);
        &:hover{
            opacity:0.5;
            filter: grayscale(0.4);
        }
    }
    div{
        display:none;
        height: 100%;
        width: 100%;
        text-align: center;
        // display: flex;
        align-items: center;
        font-size: 2rem;
        font-style: oblique;
        font-weight: 700;
        -webkit-text-stroke: 0.7px #ffffff;
        // text-shadow: 0px 2px 20px rgba(203, 213, 43, 0.53);
        text-shadow: 0px 0px 5px #12e4d9;
    }
    @media only screen and (max-width: 1025px) {
       // display:none;
       height:70%;
       width: 40%;
        left: -7%;
        top: 22%;
        transform: rotate(15deg);
    }
    @media only screen and (max-width: 770px) {
        display:none;
   }
 `;
const Card3 = styled.div`
    position: absolute;
    height: 80%;
    width: 40%;
    right: 10%;
    top: 31%;
    // opacity:0.5;
    transform: rotate(14deg);
    border: 0.5px solid #343434;
    background: transparent;
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    &:hover { 
        z-index:2;
        width:50%;
        height:80%;
        cursor:pointer;
        transform: rotate(0deg);
        transform: translateX(-10px);
    }
    div{
        display:none;
        height: 100%;
        width: 100%;
        text-align: center;
        // display: flex;
        align-items: center;
        font-size: 2rem;
        font-style: oblique;
        font-weight: 700;
        -webkit-text-stroke: 0.7px white;
        // text-shadow: 0px 2px 20px rgba(203, 213, 43, 0.53);
        text-shadow: 0px 0px 5px #fea314;
        @media only screen and (max-width: 1025px) {
            //display:none;
        }
    }
    Img:nth-of-type(1){
        height: 30%;
        width: 40%;
        filter: grayscale(1);
        position: absolute;
        top: 30%;
        left: 30%;
        filter: contrast(0.5);
        &:hover{
            display:none;
        }
        animation-name: rotateD;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
        animation-direction: reverse;
        @keyframes rotateD {
            0%{
                scale:1;
                transform: rotate3d(0, 1, 0,0deg);
            }
            25%{
                scale:0.8;
                transform: rotate3d(0, 1, 0,90deg);
            }
            50%{
                scale:1;
                transform: rotate3d(0, 1, 0,180deg);
            }
            75%{
                scale:0.8;
                transform: rotate3d(0, 1, 0,270deg);
            }
            100%{
                scale:1;
                transform: rotate3d(0, 1, 0,360deg);
            }
        }
    }
    Img:nth-of-type(2){
        display:none;
        position:absolute;
        height: 100%;
        width: 100%;
        // filter:brightness(0.5);
        &:hover{
            opacity:0.5;
            filter: grayscale(0.4);
        }
        @media only screen and (max-width: 1025px) {
            display:none;
        }
    }
    @media only screen and (max-width: 1025px) {
        //display:none
        height:70%;
        width:40%;
        right:6%;
        transform: rotate(-10deg);
    }
    @media only screen and (max-width: 770px) {
        display:none;
   }
`;
 

const Content = styled.div`
    position: absolute;
    top: 24%;
    left: 8%;
    height: 18rem;
    width: 60rem;
    color: white;
    div{
        font-size: 9rem;
        // font-family: 'Titillium Web', sans-serif;
        font-family: emoji;
        font-weight: 700;
        color: rgb(243,243,243);
        display: flex;
        align-items: center;
        
        color: transparent;
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
    @media only screen and (max-width: 426px) {
        display:block;
    }
`;
export default TopPage