import React, { useEffect } from 'react'
import styled from 'styled-components'
import {useLocation,  useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';

function ProjectDetail() {

    const navigate = useNavigate();
    const location = useLocation();
     

    function handleClick(e){
        e.preventDefault();
        navigate(-1);
        
    }

    const TechUsed = location.state.Tech.map((skill)=>{
        return <h6>{skill}</h6>;
    })

    const features = Object.entries(location.state.features).map(([key,value])=>{
         return(
            <Topic>
                <Hide as={motion.div} whileInView={{width:"0%"}} transition={{duration:1}}></Hide>
                <TitleName as={motion.div}  initial={{y:100,opacity:0}} whileInView={{y:0,opacity:[0,0,0,0.3,0.6,1]}} transition={{delay:0.2,duration:1.3}} >{key}</TitleName>
                <Info  as={motion.div}  initial={{y:100,opacity:0}} whileInView={{y:0,opacity:[0,0,0,0.3,0.6,1]}} transition={{delay:0.2,duration:1.3}} >{value}</Info>
            </Topic>
         )
    })
  return (
    <Container>
        <Header>
            <div>{location.state.title}</div>
            <div>"{location.state.aboutTitle}"</div>
        </Header>
        <Laptop><iframe></iframe></Laptop>
        <Links>
            <motion.button whileTap={{scale:"0.8"}}><a href={location.state.Livelink} target={'_blank'}>Live Website</a></motion.button>
            <motion.button whileTap={{scale:"0.8"}} ><a href={location.state.gitLink} target={'_blank'}>Source Code</a></motion.button>
        </Links>
        <Tech>
            <div>Tech Used</div>
            <div>
                {TechUsed}
            </div>
           
        </Tech>
        <Features>
            <h1>Features</h1>
             {features}
        </Features>
        <Button onClick={(e)=>handleClick(e)}>Back To Home Page</Button>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    height:fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#0f0f0f  url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
    background-repeat: repeat;
`;

const Header = styled.div`
    height:20vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    div:nth-of-type(1){
        color:#fec868;
        font-size: 5rem;
        margin-top:1%;
        font-family: 'GT Sectra Display','Times New Roman',sans-serif;
        @media only screen and (max-width: 600px) {
            font-size: 5rem;
            margin-top:15px;
        }
    }
    div:nth-of-type(2){
        color:#b99f70;
        font-size: 2.4rem;
        font-family: 'Titillium Web', sans-serif;
        @media only screen and (max-width: 430px) {
            font-size: 1.4rem;
        }
    }

    
`;

const Laptop = styled.div`
    height:500px;
    width:800px;
    position:relative;
    // border: 1px solid red;
    background-image:url("images/laptop.png");
    background-size: contain;
    background-position: center;
    background-repeat: space;
    @media only screen and (max-width: 650px) {
        height: 225px;
        width: 330px;
    }
    iframe{    
        position: absolute;
        top: 23px;
        left: 90px;
        height: 400px;
        width: 620px;
        border-radius:18px;
        @media only screen and (max-width: 1025px) {
            top: 6%;
            left: 12%;
            height: 78%;
            width: 77%;
        }

        @media only screen and (max-width: 770px) {
            top: 17%;
            left: 12%;
            height: 58%;
            width: 77%;        
        }

        @media only screen and (max-width: 650px) {       
            top: 17px;
            left: 37px;
            height: 170px;
            width: 259px;
            border-radius: 10px;   
        }
    }

`;

const Links = styled.div`

    height:6rem;
    width: 100%;
    // border: 1px solid red;
    display: flex;
    justify-content: space-evenly;
    margin-bottom:15px;
    button{
        position:relative;
        width:20%;
        background:transparent;
        border:none
        padding: 2px;
        color: #2d9687;
        font-size: 3rem;
        transition:1s;
        cursor:pointer;
        z-index:2;
        &:hover{
            scale:1.05;
            border:1px solid white;
        }
        @media only screen and (max-width: 770px) {
            width:165px;   
            font-size: 2rem;
        }
    }


`;
const Tech = styled.div`
    width:100%;
    // border:1px solid red;
    height:fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'GT Sectra Display','Times New Roman',sans-serif;
    div:nth-of-type(1){
        color:#fec868;
        font-size: 5rem;
        height: 28%;
        margin-top:1%;
        @media only screen and (max-width: 650px) {
            font-size: 3rem;
            margin-top:6%;
        }
    }

    div:nth-of-type(2){
        margin-top:2%;
        height:70%;
        width:100%;
        display:flex;
        color: #2d9687;
        justify-content:space-evenly;
        align-items:center;
        flex-wrap: wrap;
        font-family: system-ui;
        h6{
            text-transform:uppercase;
            font-size:24px;
            flex-shrink:0;
            height: 18%;
            text-align: center;
            width: 30%;
        }
        
    }
    
`;

const Features = styled.div`
    height:fit-content;
    width:96%;
    display:flex;
    flex-direction:column;
    font-family: 'GT Sectra Display','Times New Roman',sans-serif;
    align-items:center;
    overflow:hidden;
    @media only screen and (max-width: 650px) {
        font-size:13px;
    }
    h1{
        color:#fec868;
        font-size: 5rem;
        height: 28%;
        margin-top:1%;
        font-family:emoji;
        @media only screen and (max-width: 650px) {
            font-size: 3rem;
            margin-top:6%;
        }
    }
`;

const Topic = styled.div`
    position:relative;
    height:fit-content;
    width:96%;
    margin:1%;
    padding:3px;
    border:1px solid #ff0055;
    overflow: hidden;

`;

const TitleName = styled.div`
    color:#ff0055;
    // text-align:center;
    font-size: 3.5rem;
    height: 20%;
    padding:0% 1%; 
    margin-bottom:8px;
    @media only screen and (max-width: 650px) {
        font-size: 2rem;
        padding:0% 2%;
        margin-bottom:0px;
    }
`;

const Info = styled.div`
    height: 80%;
    font-size:2rem;
    padding:0% 1%; 
    // text-align:center;
    color:white;
    font-family: 'GT Sectra Display','Times New Roman',sans-serif;
    overflow:scroll;
      ::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (max-width: 770px) { 
        font-size: 1.4rem;
        padding:0% 2%;
    }`;


const Button = styled.div`
margin-top:3%;
    height: 8vh;
    width:35vw;
    border:1.5px solid #b65b6b;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:3.5rem;
    transition:0.3s;
    margin-bottom:2%;
    color:#818181;
    &:hover{
        color:white;
        border:1.5px solid white;
        cursor:pointer;
    }
   
    @media only screen and (max-width: 770px) {
        width: 55vw;
        font-size: 2.8rem;
   }
   @media (max-width: 650px) {
    width:50vw;
    font-size:1.8rem;
    }
`;

const Hide  = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    background-color:#ff0055;

`
export default ProjectDetail