import React from 'react'
import styled from 'styled-components'
import Box from './Box';
import { useState } from 'react';
import {data} from "./db"
import {motion} from "framer-motion";

function Content() {

    const [id,setId] = useState(0);

    const handleClick = (e,num)=>{

        if(document.documentElement.clientWidth<="450"){
            handleClickMobile(e,num);
            return;
        }
       
        let id1 = num===-1?e.target.id:num;
        const all = document.getElementsByClassName("one");
        const element  = document.getElementById(id1);
        Array.from(all).forEach((elem,ind)=>{
            if(elem.id===element.id){
                element.style.filter = "opacity(1) contrast(1.5) brightness(1.2)";
            }else{
                elem.style.filter = "opacity(0.4) contrast(1) brightness(1)";

            }
        })
        setId(parseInt(id1));
    }

    const handleClickMobile = (e,num)=>{
        let id1 = num===-1?e.target.id:num;
        const all = document.getElementsByClassName("one1");
        const element  = document.getElementById(id1);
        Array.from(all).forEach((elem,ind)=>{
            if(elem.id===id){
                element.style.filter = "opacity(1) contrast(1.5) brightness(1.2)";
            }else{
                elem.style.filter = "opacity(0.4) contrast(1) brightness(1)";
            }
        })
        setId(parseInt(id1));
    }

   const handleEnter =(e)=>{
        e.target.style.filter = "opacity(1) contrast(1.5) brightness(1.2)";
        e.target.style.scale=1.4;
        e.target.style.cursor="pointer";
   }
   const handleLeave =(e)=>{
    e.target.style.filter = "opacity(0.4) contrast(1) brightness(1)";
    e.target.style.scale=1;
}
    

  return (
    <Container>
        <Left>
            <Line>
                <First as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)} onClick={(event)=>handleClick(event,-1)} id='0' src= {data[0].ProfileImg} alt="null"></img></First>
                <Second as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img className="one"  onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)} onClick={(event)=>handleClick(event,-1)} id='1' src= {data[1].ProfileImg} alt="null"></img></Second>
            </Line>

            <Line>
                <Third as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}  onClick={(event)=>handleClick(event,-1)} id='2' src= {data[2].ProfileImg} alt="null"></img></Third>
                <Second as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ></Second>
            </Line>

            <Line >
                <First as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ></First>
                <Fourth as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}   onClick={(event)=>handleClick(event,-1)} id='3'src= {data[3].ProfileImg} alt="null"></img></Fourth>
            </Line>

            <Line>
                <First as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}  onClick={(event)=>handleClick(event,-1)} id='4' src= {data[4].ProfileImg} alt="null"></img></First>
                <Fifth as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}  onClick={(event)=>handleClick(event,-1)} id='10' src= {data[10].ProfileImg} alt="null"></img></Fifth>
            </Line>
            <Store>
                <Rectangle as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.5,duration:2}}>
                    {
                        data.map((elem,ind)=>{ 
                            return(
                                ind<=5 && <Square style={{display:ind===id?"none":"block"}} key={ind}><img  className="one1" onClick={(event)=>handleClick(event,-1)} id={elem.id} src={elem.ProfileImg} alt="null"></img></Square>
                            )  
                        })
                    }
                </Rectangle>
                <Main as={motion.div} viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1}} transition={{delay:1,duration:1.5}}>
                    <img  src={data[id].ProfileImg} alt="null"></img>
                </Main>
                <Rectangle as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.5,duration:2}}>
                    {
                        data.map((elem,ind)=>{ 
                            return(
                                ind>5 && <Square style={{display:ind===id?"none":"block"}} key={ind}><img  className="one1" onClick={(event)=>handleClick(event,-1)} id={elem.id} src={elem.ProfileImg} alt="null"></img></Square>
                            )  
                        })
                    }   
                </Rectangle>
            </Store>
        </Left>
        <Center>
            <Box  id={id} handleClick={handleClick} />
        </Center>
        <Right>
            <Line>
                <Third as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img  className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}   onClick={(event)=>handleClick(event,-1)} id='5' src= {data[5].ProfileImg} alt="null"></img></Third>
                <Second></Second>
            </Line>
            <Line>
                <Second as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img  className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}  onClick={(event)=>handleClick(event,-1)} id='6'  src= {data[6].ProfileImg} alt="null"></img></Second>
                <Second as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img  className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}  onClick={(event)=>handleClick(event,-1)} id='7'  src= {data[7].ProfileImg} alt="null"></img></Second>
            </Line>
            <Line >
                <First as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ></First>
                <Fourth as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img className="one"  onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)} onClick={(event)=>handleClick(event,-1)}  id='8'   src= {data[8].ProfileImg} alt="null"></img></Fourth>
            </Line>
            <Line>
                <Second as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img  className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}  onClick={(event)=>handleClick(event,-1)} id='9'  src={data[9].ProfileImg} alt="null"></img></Second>
                <Fifth as={motion.div} viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1,}} transition={{duration:1,delay:1.5}} ><img className="one" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={(e)=>handleLeave(e)}  onClick={(event)=>handleClick(event,-1)} id='11' src= {data[11].ProfileImg} alt="null"></img></Fifth>
                
            </Line>
        </Right>
    </Container>
  )
}

const Container = styled.div`
    height:80%;
    width:100vw;
    display:flex;
    align-items:center;
    @media (max-width: 768px) {
        flex-direction:column;
       
    }
    @media (max-width: 550px) {
        height:87%;
        // border: 1px solid red;
        justify-content:space-around;
        align-items:center;
        display:flex;
    }
`;

const Left = styled.div`
    height:100%;
    width:27%;
    // border:1px solid blue;
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 100vw;
        height: 20%;
        flex-direction: row;
    }
    @media (max-width: 550px) {
        height:20%;
        // border: 1px solid red;
   }
`;
const Center = styled.div`
    height:90%;
    width:46%;
    // border:1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    justify-content: center;
    @media (max-width: 1026px) {
        width:51%;
    }
    @media (max-width: 768px) {
        width:100vw;
        height: 60%;
    }
    @media (max-width: 550px) {
        height: 80%;
        justify-content: space-around;
   }
`;
const Right = styled.div`
    height:100%;
    width:27%;
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 100vw;
        height: 20%;
        flex-direction: row;
    }
    @media (max-width: 550px) {
        display:none;
    }
    
`;

const Line = styled.div`
    height:20%;
    width:90%;
    // border: 1px solid red;
    display:flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        height:100%;
        // width:20%;   
        // flex-direction:column;
    }
    @media (max-width: 550px) {
        display:none;
   }
`;
 

const Store = styled.div`
    display:none;
    @media (max-width: 550px) {
        display:flex;
        justify-content: space-around;
        align-items:center;
        height: 100%;
        width:  100%;
        // border: 1px solid red;
    }
`;

const First = styled.div`
    position: relative;
    top: -25px;
    height: 8rem;
    width: 8rem;
    img{
        height: 100%;
        width: 100%;
        filter:opacity(0.4) contrast(1);
        transition:0.4s;
        // &:hover {
        //     // filter: opacity(1) contrast(1.5) brightness(1.2);
        //     cursor:pointer;
        //     scale:1.4;
		// }

        @media (max-width: 770px) {
            height:6rem;
            width:6rem;
            top:0px;
        }
    }

    
    
`;

const Second  = styled.div`
    position: relative;
    top: 25px;
    height: 8rem;
    width: 8rem;
    // border: 1px solid orange;
    img{
        height: 8rem;
        width: 8rem;
        filter:opacity(0.4) contrast(1);
        transition:0.4s;
        &:hover {
            filter:opacity(1) contrast(1.5) brightness(1.2);
            cursor:pointer;
            scale:1.2;
		}

        @media (max-width: 770px) {
            height:6rem;
            width:6rem;
        }
    }
    
    
`;

const Third = styled.div`
    position: relative;
    top: 8px;
    left: 70px;
    height: 8rem;
    width: 8rem;
    // border: 1px solid orange;
    img{
        height: 8rem;
        width: 8rem;
        filter:opacity(0.4) contrast(1) ;
        transition:0.4s;
        &:hover {
            filter:opacity(1) contrast(1.5) brightness(1.2);
            cursor:pointer;
            scale:1.4;
		}

        @media (max-width: 770px) {
            height:6rem;
            width:6rem;
        }
    }
    
`;


const Fourth = styled.div`
    position: relative;
    top: 0px;
    right: 70px;
    height: 8rem;
    width: 8rem;
    // border: 1px solid orange;
    img{
        height: 8rem;
        width: 8rem;
        // border-radius: 50%;
        filter:opacity(0.4) contrast(1);
        transition:0.4s;
        &:hover {
            filter:opacity(1) contrast(1.5) brightness(1.2);
            cursor:pointer;
            scale:1.4;
		}

        @media (max-width: 770px) {
            height:6rem;
            width:6rem;
        }
    }  
   
`;


const Fifth = styled.div`
position: relative;
top: 32px;
right: 0px;
height: 8rem;
width: 8rem;
// border: 1px solid orange;
    img{
        height: 8rem;
        width: 8rem;
        filter: opacity(0.4) contrast(1);
        transition:0.4s;
        &:hover {
            filter:opacity(1) contrast(1.5)  brightness(1.2);
            cursor:pointer;
            scale:1.4;
		}

        @media (max-width: 770px) {
            height:6rem;
            width:6rem;
        }
    }  
`;
const Rectangle = styled.div`
    // border: 1px solid green;
    width: 35%;
    height: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Main = styled.div`
    // border: 1px solid green;
    width: 16%;
    height: 66%;
    img{
        height:100%;
        width:100%;
        opacity:1;
        // border-radius:50%;
    }
`;

const Square = styled.div`
    // border: 1px solid green;
    height: 78%;
    width: 56%;
    transition:0.4s;
    img{
        transition:0.4s;
        position:relative;
        left:-5px;
        height:100%;
        width:130%;
        border-radius:50%;
    }
`;

export default Content;