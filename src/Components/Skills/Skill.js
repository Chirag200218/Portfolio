import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Content from './Content'
// import Box from './Box'
function Skill() {
  return (
    <Container  id="SkillsSection">
        <Header/>
        <Content/>
    </Container>
  )
}

const Container = styled.div` 
    height:100vh;
    width:100%;
    scroll-snap-align: start;
    @media (max-width: 768px) {
        height: 100vh;
    }
    @media (max-width: 550px) {
        width:100%;
        height: 100vh;
    }
`;

export default Skill;