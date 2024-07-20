import React from 'react'
import NavBar from './Components/NavBar_Section.js/NavBar';
import TopPage from './Components/TopPage';
import styled from "styled-components";
import About from "./Components/About";
import Skill from "./Components/Skills/Skill";
import Project from "./Components/Project_section/Project";
import Contact from "./Components/Contact";

function MainResume() {
  return (
    <Resume>
        <NavBar/>
        <TopPage/>
        <About/>
        <Skill/>  
        <Project/>
        <Contact/>
    </Resume>
   
  )
}

const Resume = styled.div`
  width:100%;
  height:100vh;
  position:relative;
  background-color:#0f0f0f;
  overflow:hidden;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  // position: fixed;
  // top: -50%;
  // left: -50%;
  // right: -50%;
  // bottom: -50%;
  // width: 200%;
  // height: 200vh;
  background:#0f0f0f  url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
  background-repeat: repeat;
  // animation: bg-animation .2s infinite;
  opacity: .9;
  visibility: visible;
}

`;
export default MainResume