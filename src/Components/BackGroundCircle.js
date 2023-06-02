import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

function BackGroundCircle(props) {
  return (
    <Container> 
        <Circle3 as={motion.div} viewport={{once:true}} initial={{scale:0,opacity:0}} whileInView={{opacity:1,scale:[3,1,2,1,1.5,1]}} transition={{duration:2,ease:"easeIn",type: "spring", stiffness: 10 }}>
            <Circle2 as={motion.div} initial={{opacity:0}} animate={{ opacity:[1,0.2,0.6,0.2,1]}} transition={{duration:6,repeat:Infinity,repeatType: "reverse"}}>
                <Circle1 as={motion.div} initial={{opacity:0}} animate={{ opacity:[1,0.4,0.6,0.4,1]}} transition={{duration:4,repeat:Infinity,repeatType: "reverse"}}>
                     
                </Circle1>
            </Circle2>
        </Circle3>

        <Wrapper>
            <img src="images/coding.jpeg"></img>
            <About>
            
            <div className='container'>
                <div class="glitch" data-text="Hello World">Hello World!!</div>
                <div class="animate-gradient-text">Hii Myself Chirag Jain</div>
            </div>
            <span>
                <Typewriter
                        options={{
                            strings: ['Frontend Developer 💫', 'Comptetive Programmer 🌟','Educator Associate'],
                            autoStart: true,
                            loop: true,
                            cursor:"<>",
                        }}
               />
            </span>
            </About>
            {/* <div style={{position:"absolute",bottom:"2%",display:"flex",justifyContent:"space-around",alignItems:"center",height:"50px",width:"70%",border:"1px solid red"}}>
                <img src={'/images/mail_white.png'} style={{height:"50px",width:"40px",borderRadius:"0%"}}></img>
                <img src={'/images/linkedin_white.png'} style={{height:"40px",width:"40px",borderRadius:"0%"}}></img>
                <img src={'/images/leetcode_white.png'} style={{height:"40px",width:"40px",borderRadius:"0%"}}></img>
                <img src={'/images/git_white.png'} style={{height:"40px",width:"40px",borderRadius:"0%"}}></img>
            </div> */}
        </Wrapper>
        
        
        
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div> */}
        <style jsx>{`

        .animate-gradient-text {
            text-align:center;
            max-width: 300px;
            margin:0px auto;
            font-size:5.3rem;
            font-weight:bold;
        }

        
        .animate-gradient-text {
            background-image: linear-gradient(120deg, #1cdce8, #bb77ed, #f34a62);
            background-size: 200%;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: animated-gradient 5s ease-in-out infinite;
            font-family: 'Mitr', sans-serif;
        }
        
        @keyframes animated-gradient{
            0%,100%{
                background-position: 0 50%;
            }
            50%{
                background-position: 100% 50%;
            }
        }
        .container {
            width:fit-content;
            margin:0px auto;
            text-align:center;
          } 
          .glitch, .glow {
            color: #dfbfbf;
            position: relative;
            font-size: 2.5rem;
            animation: glitch 5s 5s infinite;
          }
          .glitch::before, .glow::before {
            content: attr(data-text);
            position: absolute;
            left: -2px;
            text-shadow: -5px 0 magenta;
            background: black;
            overflow: hidden;
            top: 0;
            animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
          }
          .glitch::after, .glow::after {
            content: attr(data-text);
            position: absolute;
            left: 2px;
            text-shadow: -5px 0 lightgreen;
            background: black;
            overflow: hidden;
            top: 0;
            animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
          }
          @keyframes glitch {
            1% {
              transform: rotateX(10deg) skewX(90deg);
            }
            2% {
              transform: rotateX(0deg) skewX(0deg);
            }
          }
          @keyframes noise-1 {
            3.3333333333% {
              clip-path: inset(70px 0 13px 0);
            }
            6.6666666667% {
              clip-path: inset(92px 0 9px 0);
            }
            10% {
              clip-path: inset(95px 0 6px 0);
            }
            13.3333333333% {
              clip-path: inset(95px 0 1px 0);
            }
            16.6666666667% {
              clip-path: inset(81px 0 8px 0);
            }
            20% {
              clip-path: inset(26px 0 43px 0);
            }
            23.3333333333% {
              clip-path: inset(66px 0 14px 0);
            }
            26.6666666667% {
              clip-path: inset(99px 0 2px 0);
            }
            30% {
              clip-path: inset(26px 0 42px 0);
            }
            33.3333333333% {
              clip-path: inset(83px 0 1px 0);
            }
            36.6666666667% {
              clip-path: inset(66px 0 9px 0);
            }
            40% {
              clip-path: inset(35px 0 19px 0);
            }
            43.3333333333% {
              clip-path: inset(24px 0 13px 0);
            }
            46.6666666667% {
              clip-path: inset(73px 0 24px 0);
            }
            50% {
              clip-path: inset(23px 0 48px 0);
            }
            53.3333333333% {
              clip-path: inset(29px 0 37px 0);
            }
            56.6666666667% {
              clip-path: inset(82px 0 3px 0);
            }
            60% {
              clip-path: inset(68px 0 10px 0);
            }
            63.3333333333% {
              clip-path: inset(75px 0 6px 0);
            }
            66.6666666667% {
              clip-path: inset(78px 0 19px 0);
            }
            70% {
              clip-path: inset(98px 0 3px 0);
            }
            73.3333333333% {
              clip-path: inset(32px 0 29px 0);
            }
            76.6666666667% {
              clip-path: inset(66px 0 9px 0);
            }
            80% {
              clip-path: inset(8px 0 14px 0);
            }
            83.3333333333% {
              clip-path: inset(38px 0 7px 0);
            }
            86.6666666667% {
              clip-path: inset(58px 0 33px 0);
            }
            90% {
              clip-path: inset(34px 0 5px 0);
            }
            93.3333333333% {
              clip-path: inset(12px 0 76px 0);
            }
            96.6666666667% {
              clip-path: inset(14px 0 55px 0);
            }
            100% {
              clip-path: inset(42px 0 42px 0);
            }
          }
          @keyframes noise-2 {
            0% {
              clip-path: inset(37px 0 6px 0);
            }
            3.3333333333% {
              clip-path: inset(5px 0 20px 0);
            }
            6.6666666667% {
              clip-path: inset(65px 0 3px 0);
            }
            10% {
              clip-path: inset(39px 0 18px 0);
            }
            13.3333333333% {
              clip-path: inset(36px 0 6px 0);
            }
            16.6666666667% {
              clip-path: inset(78px 0 2px 0);
            }
            20% {
              clip-path: inset(56px 0 39px 0);
            }
            23.3333333333% {
              clip-path: inset(52px 0 42px 0);
            }
            26.6666666667% {
              clip-path: inset(30px 0 22px 0);
            }
            30% {
              clip-path: inset(65px 0 36px 0);
            }
            33.3333333333% {
              clip-path: inset(82px 0 16px 0);
            }
            36.6666666667% {
              clip-path: inset(67px 0 23px 0);
            }
            40% {
              clip-path: inset(6px 0 84px 0);
            }
            43.3333333333% {
              clip-path: inset(12px 0 49px 0);
            }
            46.6666666667% {
              clip-path: inset(27px 0 74px 0);
            }
            50% {
              clip-path: inset(31px 0 28px 0);
            }
            53.3333333333% {
              clip-path: inset(78px 0 18px 0);
            }
            56.6666666667% {
              clip-path: inset(92px 0 1px 0);
            }
            60% {
              clip-path: inset(68px 0 7px 0);
            }
            63.3333333333% {
              clip-path: inset(32px 0 28px 0);
            }
            66.6666666667% {
              clip-path: inset(77px 0 11px 0);
            }
            70% {
              clip-path: inset(24px 0 11px 0);
            }
            73.3333333333% {
              clip-path: inset(15px 0 76px 0);
            }
            76.6666666667% {
              clip-path: inset(96px 0 2px 0);
            }
            80% {
              clip-path: inset(84px 0 4px 0);
            }
            83.3333333333% {
              clip-path: inset(78px 0 2px 0);
            }
            86.6666666667% {
              clip-path: inset(37px 0 24px 0);
            }
            90% {
              clip-path: inset(89px 0 10px 0);
            }
            93.3333333333% {
              clip-path: inset(26px 0 8px 0);
            }
            96.6666666667% {
              clip-path: inset(76px 0 6px 0);
            }
            100% {
              clip-path: inset(73px 0 25px 0);
            }
          }
        `}</style>
    </Container>
  )
}

const Container = styled.div`
    display : flex;
    align-items:center;
    justify-content: center;
    align-items:space-around;
    height:100vh;
    width:100%;
    overflow:hidden;
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
    position:absolute;
    border-radius: 50%;
    border: 0.6px solid #4e0c1b;
    width: 580px;
    height: 580px;
    background:transparent;
    display : flex;
    align-items:center;
    justify-content: center;
`;

const Circle2 = styled.div` 
    position:relative;
    border-radius: 50%;
    border: 1px solid white;
    width: 530px;
    height: 530px;
    background:transparent;
    display : flex;
    align-items:center;
    justify-content: center;
     box-shadow:0.1px 0.1px 3px white inset;
`;

const Circle1 = styled.div`
    position:relative;
    border-radius: 50%;
    border: 0.8px solid #cc1942;
    width: 450px;
    height: 450px;
    background:transparent;
    display : flex;
    align-items:center;
    justify-content: center;
    box-shadow:0.5px 0.5px 10px #cc1942;
`;

const Wrapper = styled.div`
    
    height: 80%;
    width: 90%;
    // border:1px solid green;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
     
    
    img{
        position:relative;
        height: 120px;
        width: 125px;
        border-radius:50%;
        z-index:1
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

const Second = styled.p`
    // color:grey;
    width:100%;
    height:20%;
    display:flex;
    justify-content:center;
    align-items:center;
    // font-weight:bold;
    // font-family: sans-serif;

    font-size: 4rem;
    padding: 0.05rem;
    background-image: radial-gradient(circle, #13b5d4, #8954a0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: black;
    -webkit-text-stroke: 0.5rem transparent;
    filter: drop-shadow(0.05rem 0.05rem rgba(0, 0, 0, 0.2));
      
    @media only screen and (max-width: 410px) {
        font-size: 4rem;
    }
`;
export default BackGroundCircle