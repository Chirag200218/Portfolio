import React from 'react'
import styled from 'styled-components'
import {data} from "./db"
import { useEffect } from 'react';
import {motion} from "framer-motion"
 

function Box({id,handleClick}) {
    useEffect(()=>{
        callTimer();
    },[]);

    function callTimer(){
        const btn = document.getElementsByClassName("right");
        const btnMob = document.getElementsByClassName("rightMob");
        setInterval(()=>{
            if(document.documentElement.clientWidth<="450"){
                btnMob[0].click();
                return;
            }else{
                btn[0].click();
            }
        },15000);
    }
  return (
    <>
        <Container as={motion.div} viewport={{once:true}}  initial={{scale:0.5}} whileInView={{scale:1}} transition={{duration:1.5}}>
            <LeftArrow as={motion.div} viewport={{once:true}}  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:4}}>
                <img onClick={(e)=>{handleClick(e,id===0?11:id-1)}} src='images/leftArrow.png' alt="oekjo"></img>
            </LeftArrow>
            <Content>
                <LeftSection>
                        <Photo>
                            <img src={data[id].ProfileImg!==undefined?data[id].ProfileImg:""} alt="oekjo"></img>
                        </Photo>
                        <Name>
                            {data[id].name}
                        </Name>
                </LeftSection>
                <RightSection>
                        <Youtube>
                            <img src='/images/badge.png'></img>
                            <a href="/portofolio.com">Certification</a>
                        </Youtube>
                        <Testimonial>
                            {data[id].testimonial}
                        </Testimonial>
                </RightSection>
            </Content>
            <RightArrow as={motion.div} viewport={{once:true}}  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:4}}>
                <img className = "right" onClick={(e)=>{handleClick(e,id===11?0:id+1)}} src='/images/rightArrow.png' alt='jfejfp'></img>
            </RightArrow>
            <Guide>
                <img onClick={(e)=>{handleClick(e,id===0?11:id-1)}} src='images/leftArrow.png' alt="oekjo"></img>
                <img className= "rightMob" onClick={(e)=>{handleClick(e,id===11?0:id+1)}} src='images/rightArrow.png' alt='jfp'></img>
            </Guide>
        </Container>
    </>

  
  )
}

const Container = styled.div`
    height: 35rem;
    width: 100%;
    // border: 1px solid blue;
    display: flex;
    align-items:center;
    @media (max-width: 550px) {
        height: 100%;
        justify-content: space-evenly;
        align-items:center;
        flex-direction: column;
   }
`;

const Content = styled.div`
    height: 100%;
    width: 80%;
    // border: 1px solid brown;
    background-color: white;
    border-radius: 8px;
    display:flex;
    align-items:center;
    @media (max-width: 769px) {
        height:80%;
    }
    @media (max-width: 550px) {
       height:35rem;
       width: 90%;
       flex-direction:column;
   }
`;

const LeftArrow = styled.div`
    height: 15rem;
    width: 10%;
    // border: 1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width: 6.5rem;
        filter: contrast(0.5);
    }
    @media (max-width: 550px) {
        display:none;
   }
   &:hover {
    cursor:pointer;
}
`;

const RightArrow = styled.div`
    height: 15rem;
    width: 10%;
    // border: 1px solid brown;
    display:flex;
    align-items:center;
    justify-content:center; 
    img{
        width: 6.5rem;
        filter: contrast(0.5);
    }
    @media (max-width: 550px) {
        display:none;
   }   
   &:hover {
    cursor:pointer;
    }
`;

const Guide = styled.div`
   display:none;
   @media (max-width: 550px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 12%;
        width: 90%;
        cursor:pointer;
        // margin-top: 6%;
        // border: 1px solid red;
        img{
        
            width: 5rem;
            filter: contrast(0.3);
        }
    }
`;

const LeftSection = styled.div`
    height: 90%;
    width: 30%;
    border-right: 1px solid #dbdbdb;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    @media (max-width: 550px) {
         width:90%;
         height: 18%;
         border-right: none;
         justify-content: space-around;
         border-bottom:1px solid #dbdbdb;
   }
`;


const RightSection = styled.div`
    height: 100%;
    width: 70%;
    display:flex;
    flex-direction: column;
    align-items:center;
    @media (max-width: 550px) {
        width:100%;
        height: 82%;
  }
`;
 

const Photo = styled.div`
    height: 10rem;
    width: 10rem;
    // border:1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 100%;
        width:100%;
    }
    @media (max-width: 550px) {
        display:none;
   }
`;

const Name = styled.div`
    height: 40%;
    width: 100%;
    // border:1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:large;
    font-size: 3rem;
    font-weight: 700;
    
    @media (max-width: 550px) {
        font-size:x-large;
        font-weight: 500;
   }
`;


const Youtube = styled.div`
    height:10%;
    width:90%;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    font-weight: 700;
    color: gray;
    margin-top: 20px;
    align-items:center;
    img{
        height: 100%;
        margin-right:10px;
    }
    a{
        color:black;
        &:hover{
            color:grey;
            text-decoration: none;
        }
    }
    &:hover {
        cursor:pointer;
        
    }
`;

const Testimonial = styled.div`
    height:70%;
    margin-top:10%;
    overflow-wrap: break-word;
    font-family: open sans,sans-serif;
    font-size: 1.5rem;
    width:90%;
    margin: 7% 0px;
    font-weight: 400;
    color: black;
    @media (max-width: 550px) {
         margin:10px 0px;
         font-size:1.4rem;
   }

`;

export default Box