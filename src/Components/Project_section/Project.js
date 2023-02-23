import { motion } from 'framer-motion';
import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {project} from '../Skills/db'

function Project(proj) {

    const navigate = useNavigate()

    function handleClick(proj){

        navigate("/project",{state:proj});
    }

    function handleCursor(e){
        // e.style.cursor="none";
        const cursorRounded = document.querySelector('.rounded');
        cursorRounded.style.display="inline";
        cursorRounded.style.top = (e.clientY-75)+"px";
        cursorRounded.style.left = (e.clientX-50)+"px";
    }
    function closeCursor(){
        const cursorRounded = document.querySelector('.rounded');
        cursorRounded.style.display="none";
    }

    const Data =  project.map((proj)=>{
        let img = proj.img;
        return(
            <Work onClick={()=>handleClick(proj)} key={proj.id} id={proj.id}  onMouseMove={(e)=>handleCursor(e)} onMouseLeave={closeCursor}>
                <Img style={{ backgroundImage:`url(${img})` , width:"0%"} } as ={motion.div} layout   viewport={{ once: true }}   whileInView={{width:"100%"}} transition={{duration:2}}>                </Img>
                <App>{proj.title}</App>
                <Id as={motion.div} viewport={{ once: true }} initial={{opacity:0,y:200}} whileInView={{opacity:1,y:0}} transition={{duration:1.5}}>{proj.id}</Id>
            </Work>
        )
    })

    
  return (
    <Container  id="ProjectsSection">
        <Round className='rounded' ></Round>
        <Header   viewport={{once:true}} initial={{y:-100,x:-200}} whileInView={{x:0,y:0}} transition={{duration:2}}>  Work  </Header>
        <Title>My Work</Title>
        <Section>
             {Data}
        </Section>
        
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height:100vh;
    scroll-snap-align:start;
    // background-color: #0b0a0a;
    position:relative;
    display:flex;
    justify-content: center;
    // align-items:center;
`;
const Title = styled.div`
    display:none;
    @media only screen and (max-width: 550px) {
        position:absolute;
        text-align:center;
        height:10%;
        width:100%;
        display:block;
        font-weight: 800;
        font-family: 'GT Sectra Display','Times New Roman',sans-serif;
        // color: #f7ebda;
        font-size:6rem;
        color: transparent;
        text-shadow: 0.02em 0.02em 0.01em rgb(0 0 0 / 25%), 0 0 0 #8e8e8e;
        -webkit-text-stroke: 0.5px #343434;
    }
`;
const Header = styled(motion.div)`
    height: 33rem;
    width: 80rem;
    position: absolute;
    left: 10px;
    bottom: 0px;
    font-family: 'GT Sectra Display','Times New Roman',sans-serif;
    // border: 1px solid red;
    font-size: 30rem;
    font-weight: bolder;
    color: transparent;
    text-shadow: 0.02em 0.02em 0.01em rgb(0 0 0 / 25%), 0 0 0 #191919;
    
    @media only screen and (max-width: 1030px) {
        width: 47rem;
        font-size: 21rem;
        height: 22rem;
    }
    
    @media only screen and (max-width: 770px) {
        width: 47rem;
        font-size: 20rem;
        height: 21rem;
    }

    @media only screen and (max-width: 430px) {
        display:none;
    }
`;


const Section = styled.div`
    height: 80%;
    width: 90%;
    z-index: 1;
    margin-top:6rem;
    // border: 1px solid red;
    display:flex;
    align-items:center;
    justify-content: space-between;
    overflow-y: hidden;
    // overflow: scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    @media only screen and (max-width: 430px) {
        flex-direction: column;
        overflow-y: scroll;
        width: 90%;
        height: 88%;
        // border: 1px solid red;
        ::-webkit-scrollbar {
            display: none;
          }
    }
}`;

const App = styled.div`
    position:absolute;
    top:16%;
    height:30%;
    width:100%;
    word-break: break-word;
    // border: 1px solid red;
    text-align:center;
    scale:0.4;
    opacity:0;
    transition:0.7s;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:4rem;
    color:#e9b171;
    font-weight:700;
`;

const Img= styled.div`
    height:100%;
    width:100%;
    display:block;
    background-color:white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    // opacity:0.7;
    display:flex;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 430px) {
        background-size: contain;
    }
`;


const Id = styled.div`
    position: absolute;
    height: 25%;
    width: 25%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: end;
    -ms-flex-pack: end;
    justify-content: end;
    right: -10%;
    font-family: 'GT Sectra Display','Times New Roman',sans-serif;
    color: transparent;
    font-size: 13rem;
    line-height: .25;
    font-style: italic;
    font-weight: 700;
    -webkit-text-stroke-width: 0.05vw;
    -webkit-text-stroke-color: #e2b8aa;
    z-index:3;
    top:0px;
`;

const Work = styled.div`
    position: relative;
    height: 75%;
    width: 17%;
    top: ${(props)=>(props.id%2!=0)?"0px":"-35px"};
    // border: 1px solid red;
    flex-shrink:0;
    margin-left: 4rem;
    margin-right:4rem;
    background-color:transparent;
    display:flex;
    text-align:center;
    &:hover{ 
       & > ${Img} {
            opacity:0.4;
            // color:transparent;
       }
       & > ${Id} {
            color:white;
       }
       & > ${App}{
            opacity:1;
            scale:1.1;
       }
        cursor:none;
    }
    @media only screen and (max-width: 1030px) {
        width:21%;
    }

    @media only screen and (max-width: 770px) {
        width:28%;
    }

    @media only screen and (max-width: 430px) {
        height: 40%;
        width: 70%;
        top:    0px;
        margin-top: 2.5rem;
    }
`;

const Round = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    display: none;
    background-image: url("images/View.svg");
    transform: translate(50%,-50%);
    pointer-events: none;
    animation: rotation 8s infinite linear;
    z-index:1000;

    @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
`;

export default Project