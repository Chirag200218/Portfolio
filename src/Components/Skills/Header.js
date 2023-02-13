import React from 'react'
import styled from "styled-components";
import {motion} from "framer-motion"
function Header() {
  return (
    <> 
        <Head>
            <motion.h1 viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5,ease:"easeIn"}}>Skills</motion.h1>
            <motion.h3 viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.9,ease:"easeIn"}} >Every skill we acquire double our odds of <span>Success</span></motion.h3>
        </Head>
    </>
  )
}

const Head = styled.div`
    height: 20%;
    width:100vw;
    display:flex;
    justify-content: space-around;
    flex-direction:column;
    h1{
        color:white;
        text-align:center;
        font-family: 'GT Sectra Display','Times New Roman',sans-serif;
        font-size:7rem;
        // font-style: italic;
        //font-size: 5rem;
        color: transparent;
        font-weight:700;
        text-shadow: 0.02em 0.02em 0.01em rgb(0 0 0 / 25%), 0 0 0 #8e8e8e;
        -webkit-text-stroke: 0.5px #343434;
        @media only screen and (max-width: 430px) {
            height:100%;
            display: flex;
            font-style: unset;
            justify-content: center;
            align-items: center;
            font-weight: bolder;
        }
    }
    h3{
        color:grey;
        span{
            color:#328e32;
        }
        text-align:center;
        @media only screen and (max-width: 430px) {
            display:none;
        }
    }
    @media only screen and (max-width: 430px) {
           height:13%; 
    }
`;
export default Header