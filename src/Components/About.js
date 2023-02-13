import React, { useEffect } from 'react'
import styled from 'styled-components';
import {motion} from "framer-motion"
import { useState } from 'react';

function About() {
  const images = ['images/hobbies.png','images/tt.png','images/coding.jpeg','images/travel2.png'];
  const[img,setImg] = useState("images/tt.png");
  const [type,setType] = useState("About");
  let i= 0;
  useEffect(()=>{
     (function counter(){
        setInterval(()=>{
          setImg(images[i]);
          i++;
          i = i%4;
        },5000);
      })();
  },[])

 
  return (
    <Container id="AboutSection">
         <Header  as={motion.div} viewport={{ once: true }}  initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:1}}>About</Header>
        <DecisionBox>
            <Decision onClick={()=>setType("About")} style={{backgroundColor:type==="About"?"#fec868":"transparent"}}>About</Decision>
            <Decision onClick={()=>setType("Education")} style={{backgroundColor:type==="Education"?"#fec868":"transparent"}}>Education</Decision>
            <Decision onClick={()=>setType("Experience")} style={{backgroundColor:type==="Experience"?"#fec868":"transparent"}}>Experience</Decision>
        </DecisionBox>
        <ContentBox>
            {
              type==="About" && 
              (<AboutBox>
                <span>Chirag is persuing B.tech in Computer Science from SKIT,Jaipur.He has worked with geekster as a SDE intern and teaching associate.</span>
                <span>Chirag is fueled by his passion to learn and grow pierjgp prj gjerogjpgjer gigjre gerpijg perregjergpre erigjerp gjer igijt pfrjgprjg pigj repigj petigj tetpigjtrpigjtpogj potg</span>
              </AboutBox>)
            }
            {
              type==="Experience" &&
              <BackImage>
                <Content>
                <img src={'/images/geek.png'}></img>
                  <h3>Teaching Associate</h3>
                  <h5>Geekster</h5>
                  <span>Nov,2022-Dec,2022</span>
                  <App>Worked as odfp ipdfjd ip</App>
                </Content>  
                <Content>
                  <img src={'/images/geek.png'}></img>
                  <h3>SDE INTERN</h3>
                  <h5>Geekster</h5>
                  <span>july,2022-oct,2022</span>
                  <App>Worked as odfp ipdfjd ip</App>
                </Content>
              </BackImage>
            }
             {
              type==="Education" &&
              <BackImage >
              <Content>
                <img src={'/images/CA.png'}></img>
                  <h3>Matric, 2018 </h3>
                  <h5>Central Academy, Chittor</h5>
                  <App>Worked as odfp ipdfjd ip</App>
              </Content>
              <Content>
                <img src={'/images/CA.png'}></img>
                  <h3>Secondary, 2020 </h3>
                  <h5>Central Academy, Chittor</h5>
                  <App>Worked as odfp ipdfjd ip</App>
              </Content>
              <Content>
              <img src={'/images/skit.png'}></img>
                <h3>Btech, CSE</h3>
                <h5>SKIT, Jaipur</h5>
                <span>2020-24</span>
                <App>Worked as odfp ipdfjd ip</App>
              </Content>

              </BackImage>
              
            }
        </ContentBox>

    </Container>
  )
}

const Container = styled.div`
    height:100vh;
    width:100vw;
    position:relative;
    scroll-snap-align: start;
    // background-color:#0b0a0a;
    display:flex;
     flex-direction: column;
    // justify-content: center;
    //  align-items:center;
    // border: 1px solid pink;
    @media only screen and (max-width: 430px) {
      justify-content: flex-end;
  }
`;
const DecisionBox = styled.div`
  height:7%;
  width:80%;
  margin-top:100px;
  margin-left:6%;
  display:flex;
  @media only screen and (max-width: 130px) {
    width:90%;
  }
}
 
`;
const Decision = styled.div`
  height:100%;
  width:220px;
  margin-right:20px;
  border:1px solid grey;
  display:flex;
  align-items:center;
  padding:0px 10px;
  font-size:26px;
  font-weight: bold;
  cursor:pointer;
  border-radius:10px 10px 0px 0px;

`;
const ContentBox = styled.div`
  height:60%;
  width:80%;
  margin-left:6%;
  // border:1px solid grey;
  background-color:	rgba(60,60,60,0.3);
  display:flex;
  align-items:center;
  // z-index:1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const BackImage= styled.div`
    height:100%;
    width:100%;
    background-repeat:no-repeat;
    background-position: center;
    background-image: url('/images/admission_process_web.png');
    display:flex;
    align-items:center;
    justify-content:space-around;
`;


const Header = styled.div`
    height: 33rem;
    width: 80rem;
    position: absolute;
    right: 10px;
    bottom: 0px;
    font-family: 'GT Sectra Display','Times New Roman',sans-serif;
    // border: 1px solid red;
    font-size: 30rem;
    font-weight: bolder;
    color: transparent;
    text-shadow: 0.02em 0.02em 0.01em rgb(0 0 0 / 25%), 0 0 0 #191919;
   
    @media only screen and (max-width: 1030px) {
      width: 57rem;
      font-size: 21rem;
      height: 22rem;
    }

    @media only screen and (max-width: 770px) {
      width: 47rem;
      font-size: 18rem;
      height: 19rem;
    }

    @media only screen and (max-width: 430px) {
        display:none;
    }
`;

const App = styled.div`
    display:none;
    position:absolute;
    z-index:1;
    border-radius:14px;
    height:100%;
    width:100%;
    text-align:center;
    padding:10px;
    transition:0.6s;
    color:white;  
`;
const Content = styled.div`
    height:240px;
    width:250px;
    // border:1px solid red;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#fec868;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0,0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    justify-content:center;
    position:relative;
    transition: 1s;
    h3{
      margin:10px 0px;
    }
    h5{
      margin-bottom:10px;
    }
    img{
      height:70px;
    }
    &:hover{
      & > ${App}{
        display:block;   
      }
      background-color:#74541a; 
      span,h3,h5,img{
        display:none;
      }

      
    }
`;
const AboutBox= styled.div`
    height:100%;
    width:100%;
    padding:20px;
    span{
      color:#fec868;
      font-size:16px;
    }
`;

export default About