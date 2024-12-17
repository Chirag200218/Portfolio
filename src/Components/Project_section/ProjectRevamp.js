import React, { useState } from 'react'
import styled from 'styled-components';
import { project, projectData } from '../Skills/db';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import './ProjectRevamp.css';

const ProjectRevamp = () => {

    const [selectedProject, setSelectedProject] =  useState(0);

    function handleCursor(e){
        const cursorRounded = document.querySelector('.rounded');
        cursorRounded.style.display="inline";
        cursorRounded.style.top = (e.clientY-150)+"px";
        cursorRounded.style.left = (e.clientX-50)+"px";
    }
    function closeCursor(){
        const cursorRounded = document.querySelector('.rounded');
        cursorRounded.style.display="none";
    }
    const handleClick = (id)=>{
        setSelectedProject(id);
    }

  return (
     <Container id="ProjectsSection">
        <Content>
            <Round className='rounded' ></Round>
            <Projects>
                {
                    projectData.map((projectDetail)=>(
                        <Project  isSelected={selectedProject === null || selectedProject !== projectDetail.id }
                            
                            onClick={()=>handleClick(projectDetail.id)} onMouseMove={(e)=>handleCursor(e)} onMouseLeave={closeCursor} key={projectDetail.id}>
                            <Title className='header-responsive-style' >
                                {projectDetail.title}
                            </Title>
                            <Description className='text-responsive-style'>
                                {projectDetail.discription}
                            </Description>
                            
                        </Project>
                    ))
                }
            </Projects>
            <Detail>
                <Box>
                    <Summary>
                        <h3>
                            Summary
                        </h3>
                        <p className='text-responsive-style'>
                            {projectData[selectedProject].summary}
                        </p>
                    </Summary>
                    <Features>
                        <h3>
                            Features
                        </h3>
                        <div>
                            {projectData[selectedProject].features.map((feature,index)=>(
                                <p className='text-responsive-style'>✔️ {feature}</p>
                            ))}
                             
                        </div>
                    </Features>
                    
                        <button className='btn github'>Github</button>
                        <button className='btn live'>Live</button>
                     
                    <Scroller>
                        <Marquee pauseOnHover={true}>
                            {
                                projectData[selectedProject].images.map((src)=>(
                                    <Element>
                                        <img src={src} alt='projectImage'/> 
                                    </Element>
                                ))
                            }
                            
                        </Marquee>
                    </Scroller>
                </Box> 
                
               
            </Detail>
        </Content>
        <Mobile>   
            <Projects>
                {
                    projectData.map((projectDetail)=>(
                        <>
                            <Project  isSelected={selectedProject === null || selectedProject !== projectDetail.id }
                            onClick={()=>handleClick(projectDetail.id)} onMouseMove={(e)=>handleCursor(e)} onMouseLeave={closeCursor} key={projectDetail.id}>
                            <Title>
                                {projectDetail.title}
                            </Title>
                            <Description>
                                {projectDetail.discription}
                            </Description>
                        </Project>
                        {selectedProject !== null && selectedProject === projectDetail.id && 
                            // <Detail>
                            //     <Box>
                            //         <Summary>
                            //             <h4>
                            //                 Summary
                            //             </h4>
                            //             <p className='text-responsive-style'>
                            //                 {projectData[selectedProject].summary}
                            //             </p>
                            //         </Summary>
                            //         <Features>
                            //             <h4>
                            //                 Features
                            //             </h4>
                            //             <div>
                            //                 {projectData[selectedProject].features.map((feature,index)=>(
                            //                     <p className='text-responsive-style'>{index+1}. {feature}</p>
                            //                 ))}
                            //             </div>
                            //         </Features>
                            //         <Links>
                            //             <Link>Github</Link>
                            //             <Link>Live</Link>
                            //         </Links>
                            //     </Box>
                            // </Detail>} 
                            <Box>
                    <Summary>
                        <h3>
                            Summary
                        </h3>
                        <p className='text-responsive-style'>
                            {projectData[selectedProject].summary}
                        </p>
                    </Summary>
                    <Features>
                        <h3>
                            Features
                        </h3>
                        <div>
                            {projectData[selectedProject].features.map((feature,index)=>(
                                <p className='text-responsive-style'>✔️ {feature}</p>
                            ))}
                             
                        </div>
                    </Features>
                    
                        <button className='btn github'>Github</button>
                        <button className='btn live'>Live</button>
                     
                    
                </Box> 

                            }
                        </>
                        
                    ))
                }
            </Projects> 
        </Mobile>
       
     </Container>
  )
}

const Container = styled.div`
    width:100vw;
    height:fit-content;
    background-color: #0b0a0a;
    position:relative;
    display:flex; 
    justify-content:center;
    align-items:center;
//  background-color: black;
//  background-image: radial-gradient(#4a5568 1px, transparent 1px);
//  background-size: 30px 30px;
`;
const Content = styled.div`
    width:100%;
    height:100%;
    display:flex; 
    padding:2rem;
    display: flex;
    align-items: center;
    max-width:1050px;
    @media only screen and (max-width:650px) {
        display:none;
        padding:0rem;
    }
    @media only screen and (min-width:1720px) {
        max-width:1200px;
    }
    @media only screen and (min-width:2400px) {
        max-width:1500px;
    }
`;

const Projects = styled.div`
    width:45%;
    height:100%;
    max-height:90vh;
    overflow:scroll;
    // border:1px solid red;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    padding:2rem;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    @media (max-width:650px) {
         width:100%;
         max-height:100%;
         padding:0rem;
    }

`;
const Detail = styled.div`
    width:60%;
    height:fit-content;
    max-height:100%;
    @media only screen and (max-width:650px) {
        width:100%;
        padding:0rem;
    }
`;

const Box = styled.div`
    width: 100%;
    height:fit-content;
    min-height:400px;
    max-height:100%;
    background: linear-gradient(to top right, #fff5cc, #ffffff);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius:10px;
    overflow:hidden;
    padding:15px;
    @media only screen and (max-width:650px) {
        min-height:250px;
    }
`;

const Summary = styled.div`
    width:100%;
    height:fit-content;
    margin-bottom: 10px;
    p{
    margin-top:6px;
    }
`;

const Features = styled.div`
    width:100%;
    height:fit-content;
    word-wrap: break-word;
    margin-bottom: 10px;
    div{
        margin-top:6px;
    }
    p{
        padding: 5px 0;
        border-bottom: 1px solid #dedbdb;
    }
`;

const Scroller = styled.div`
    width:100%;
    height:40vh;
    margin-top:10px;
    max-height:300px;
    display:flex;
    align-items:center;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }  
`;

const Element = styled.div`
    height:80%;
    width: 300px;
    margin:0px 10px;
    flex-shrink: 0;
    img{
        height:220px;
        width:100%;
        object-fit: cover;
       box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    }
`;




const Project = styled.div`
    width:90%;
    height: fit-content;
    background-color:white;
    border-radius: 10px;
    padding:2rem;
    margin: 2rem 0rem;
    cursor:none;
    background: ${(props) =>
    props.isSelected
      ? "linear-gradient(to top left, #121212, #1a1a1a, #232323)"
      : "linear-gradient(to right, #ffffff, #fff5cc)"};
    border: ${(props) => (props.isSelected ? "1px solid #7775751a" : "none")};
    box-shadow: ${(props) =>
        props.isSelected ? "0 4px 8px rgba(0, 0, 0, 0.15)" : "none"};
    transition: all 0.3s ease;
    color:  ${(props) =>
        props.isSelected ? "white" : "black"};
    // background: linear-gradient(to top left, #121212, #1a1a1a, #232323);
    // border: 1px solid #7775751a;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);s
`;

const Title = styled.p`
    font-weight: bold;
`;
const Description = styled.p`
`;

const Round = styled.div`
    width: 80px;
    height: 80px;
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


const Mobile = styled.div`
    display:none;
    width: 90%;
    height:100%;
    padding:2rem;
    overflow:scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
     @media (max-width:650px) {
        display:block;
    }
`;
export default ProjectRevamp