import React from 'react'
import styled from 'styled-components';
import {motion,AnimatePresence} from "framer-motion"
import { useState } from 'react';
import '../index.css'

function About() {
  const [type,setType] = useState("About");
  const [work,setWork] = useState("");
  const view=  (e,id)=>{
    let outer = document.getElementById("scrollable");
    let elem = document.getElementById(id);
    // outer.scrollTop = Position(elem+100);
    // // e.target.scrollIntoView();
    // outer.scrollTo(0,Position(elem)-100);
    // elem.scrollIntoView();
    // elem.scrollBy(e.clientX+50,0);
    // console.log(e.clientX);
  }
  function Position(obj){
    var currenttop = 0;
    if (obj.offsetParent){
     do {
      currenttop += obj.offsetTop;
    }while ((obj = obj.offsetParent));
     return [currenttop];
    }
   }
  return (
    <Container id="AboutSection">
        <Laptop>
         <Header className='header-responsive-style' as={motion.div} viewport={{ once: true }}  initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:1}}>
           <p> About</p>
          </Header>
         <Circle></Circle>
         <Circle1></Circle1>
        <DecisionBox>
            <Decision onClick={()=>setType("About")} style={{backgroundColor:type==="About"?"#fec868":"transparent"}}>About</Decision>
            <Decision onClick={()=>setType("Education")} style={{backgroundColor:type==="Education"?"#fec868":"transparent"}}>Education</Decision>
            <Decision onClick={()=>setType("Experience")} style={{backgroundColor:type==="Experience"?"#fec868":"transparent"}}>Experience</Decision>
        </DecisionBox>
        <ContentBox>
            
            {
              type==="About" && 
              (<AboutBox className='text-responsive-style'>
                  <p>Hello! I'm <strong>Chirag Jain</strong>, a Full Stack Developer who loves tackling problems, optimizing performance, and building solutions that make life easier—one line of code at a time.</p>
                  <p>I've always been curious about <strong>how things work</strong>, and that mindset has stuck with me. Whether it's breaking down complex problems in competitive programming (hello, <strong>LeetCode Knight rating</strong> and <strong>4* CodeChef</strong>!) or designing responsive dashboards at work, I enjoy the process of solving challenges efficiently and cleanly.</p>
                  <p>At my current role, I've worked on building <strong>interactive dashboards</strong>, optimizing APIs, and implementing features that reduce load times and improve user experience. I'm all about delivering software that's <strong>fast, functional, and user-friendly</strong>.</p>
                  <p>Beyond work, I'm big on <strong>continuous learning</strong>—I love exploring new frameworks, optimizing my code, and staying up-to-date with the ever-changing tech landscape. I also enjoy collaborating with others, whether it's brainstorming solutions, reviewing code, or fixing that one bug that's been haunting us all.</p>
                  <p>Now, for the fun part: I'm also a <strong>low-key foodie</strong>. You'll rarely see me turn down a good cup of <strong>chai</strong> or a pizza with extra toppings. I like to think it's the fuel behind all those late-night debugging sessions.</p>
                  <p>At the end of the day, I'm someone who believes in balance: <strong>coding, learning, and staying curious</strong>—because that's how great software (and great developers) are made.</p>
                  <p>If you're looking for someone who's passionate, adaptable, and ready to take on challenges—while occasionally cracking a joke or two—let's connect. I'm always excited to collaborate, learn, and build something meaningful together.</p>

                </AboutBox>)
            }
            {
              type==="Experience" &&
              <BackImage> 
                <Content>
                  <h3>Teaching Associate</h3>
                  <h5>Geekster</h5>
                  <span>Nov,2022 - Dec,2022</span>
                  <App className='card-text-responsive-style'> 
                    <li>🌟 Took regular live and remedial classes for 70+ students in java/DSA.</li>
                    <li>🌟 Helped 250+ students by debugging their codes and solved their doubts.</li>
                    <li>🌟 Created 300+ problems based on Java/DSA.</li>
                  </App>
                </Content>  
                <Content>
                   
                  <h3>SDE INTERN</h3>
                  <h5>Geekster</h5>
                  <span>July,2022 - Oct,2022</span>
                  <App className='card-text-responsive-style'> 
                    <li>🌟 Revamped geekster website using nextJs and typescript, making it responsive for mobile devices and to improve user engagement.</li>
                    <li>🌟 Fixed bugs and optimized website perfomance and speed.</li>
                    <li>🌟 Implement productive design to make data more highlighted and clear to audience.</li>
                  </App>
                </Content>
                <Content>
                 
                  <h3>Full Stack Developer</h3>
                  <h5>AppPerfect Corp</h5>
                  <span>Sept,2023 - Present</span>
                  <App className='card-text-responsive-style'> 
                    <li >🌟Developed and maintained user-friendly interfaces with React, enhancing frontend performance and ensuring seamless user experience.</li>
                    <li>🌟Engineered and integrated scalable APIs, streamlining data access and enhancing system performance across application components.</li>
                  </App>
                </Content>
              </BackImage>
            }
             {
              type==="Education" &&
              <BackImage >
              <Content>
                <img src={'/images/CA.png'} alt="chirag"></img>
                  <h3>Matric</h3>
                  <h5>Central Academy, Chittor</h5>
                  <App style={{textAlign:"center"}}>
                    <p style={{fontSize:"18px"}}>10th class</p>
                    <p style={{fontSize:"12px"}}>2017-18</p>
                    <p style={{fontSize:"0.9vw"}}>Received the "Best Student Award" for outstanding performance in both academics and sports, state level in Kho-kho, table tennis.</p>
                  </App>
              </Content>
              <Content>
                <img src={'/images/CA.png'} alt="chirag"></img>
                  <h3>Secondary </h3>
                  <h5>Central Academy, Chittor</h5>
                  <App style={{textAlign:"center"}}>
                    <p style={{fontSize:"18px"}}>12th class</p>
                    <p style={{fontSize:"12px"}}>2019-20</p>
                    <p style={{fontSize:"0.9vw"}}>Percentage: 95%</p>
                  </App>
              </Content>
              <Content>
              <img src={'/images/skit.png'} alt="chirag"></img>
                <h3>Btech, CSE</h3>
                <h5>SKIT, Jaipur</h5>
                <App style={{textAlign:"center"}}>
                  <p style={{fontSize:"18px"}}>B.tech CSE</p>
                  <p style={{fontSize:"12px"}}>2020-2024</p>
                  <p style={{fontSize:"18px"}}>CGPA: 9.5</p>
                  <p style={{fontSize:"0.9vw"}}>Won multiple university Table Tennis championships and taught 300+ juniors coding through college clubs.</p>
                </App>
              </Content>

              </BackImage>
              
            }
        </ContentBox>
        </Laptop>
        <Mobile>
             
            <AnimatePresence>
              {type==="About" && (
                <Work className='text-responsive-style' style={{width:"350px"}}as={motion.div}  initial={{opacity:0}} whileInView={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
                  <p>Hi, I'm <strong>Chirag Jain</strong>, a <strong>Full Stack Developer</strong> who thrives on solving complex problems and building clean, scalable solutions. I enjoy turning requirements into applications that not only work but also feel intuitive and seamless for users.</p>
                  <p>I'm the kind of person who enjoys digging into tricky coding challenges, breaking them down, and crafting elegant solutions—whether it's designing dashboards, optimizing APIs, or reducing rendering times. For me, coding is like solving a brain teaser with the added bonus that the result actually helps people.</p>
                  <p>When I'm not knee-deep in code, I'm probably reading up on new tech or working on a fun project to sharpen my skills. I believe in <strong>continuous learning</strong> and staying adaptable—because, let's face it, the tech world never stops evolving.</p>
                  <p>Oh, and one more thing: I'm also a <strong>low-key foodie</strong> who will never turn down a good cup of <strong>chai</strong> or a pizza with extra toppings. It's all about balance, right?</p>
                  <p>If you're looking for someone who combines problem-solving, curiosity, and a dash of humor, let's connect. Whether it's building, debugging, or brainstorming, I'm always ready to jump in.</p>

                </Work>
              )}
            </AnimatePresence>
            <AnimatePresence>
                {type==="Education" && (
                  <Work as={motion.div} viewport={{once:true}} initial={{x:300}} whileInView={{x:0}} exit={{x:-400}} transition={{duration:0.3}}> 
                    <OuterCircle>
                      <InnerCircle style={{height:"110px",width:"110px"}}>
                         <img src={"/images/CA.png"} style={{scale:"1.2"}}></img>
                         <div style={{height:"100%",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"50%",textAlign:"center"}}>
                          <p style={{fontSize:"10px"}}>10th class</p>
                          <p style={{fontSize:"8px"}}>2017-18</p>
                          <p style={{fontSize:"9px"}}>Got Best Student Award,state level in Kho-kho,table tennis</p>
                        </div>
                      </InnerCircle>
                      <Stick></Stick>
                    </OuterCircle>
                    <OuterCircle>
                      <InnerCircle style={{height:"115px",width:"115px"}}>
                        <img src={"/images/CA.png"}  style={{transform: "rotate(59deg)",scale:"1.2"}}></img>
                        <div style={{height:"100%",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center", borderRadius:"50%",textAlign:"center",transform:"rotate(63deg)"}}>
                          <p style={{fontSize:"10px"}}>12th class</p>
                          <p style={{fontSize:"8px"}}>2019-20</p>
                          <p style={{fontSize:"9px"}}>Percentage: 95%</p>
                        </div>
                      </InnerCircle>
                    </OuterCircle>
                    <OuterCircle>
                      <InnerCircle style={{height:"125px",width:"125px"}}>
                        <img src={"/images/skit.png"} style={{transform: "rotate(-10deg)",scale:"1.5",borderRadius:"50%"}}></img>
                        <div style={{height:"100%",width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"50%",textAlign:"center",transform:"rotate(-10deg)",padding:"1px"}}>
                          <p style={{fontSize:"10px"}}>B.tech CSE</p>
                          <p style={{fontSize:"8px"}}>2020-2024</p>
                          <p style={{fontSize:"9px"}}>CGPA: 9.5</p>
                          <p style={{fontSize:"8px"}}>Won multiple university TT champioship and taught 300+ juniors coding through college clubs</p>
                        </div>
                      </InnerCircle>
                      <Stick2></Stick2>
                    </OuterCircle>
                  </Work>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {type==="Experience" && (
                  <Work id="scrollable" as={motion.div} viewport={{once:true}} initial={{x:300}} whileInView={{x:0}} exit={{x:-400}} transition={{duration:0.3}} style={{overflow:"scroll",cursor:"pointer",padding:"10px"}}> 
                    <Openbox onClick={(e)=>{work==="three"?setWork(""):setWork("three"); view(e,"three")}} id="three">
                        <div style={{height:"90px",position:"relative",padding:"10px"}}>
                          <h3 style={{width:"70%",wordBreak:"break-word"}}>Full Stack Developer</h3>
                          <span>Sept,2023 - Present</span>
                          <img style={{position:"absolute",height:"50%",top:"20px",right:"20px"}} src={"/images/AppPerfect.png"}></img>
                        </div>
                        {work==="three" && (
                          <Expand> 
                              <ul>
                                <li>Developed and maintained user-friendly interfaces with React, enhancing frontend performance and ensuring seamless user experience.</li>
                                <li>Engineered and integrated scalable APIs, streamlining data access and enhancing system performance across application components.</li>
                              </ul>
                          </Expand>
                        )}
                    </Openbox>
                    <Openbox onClick={(e)=>{work==="two"?setWork(""):setWork("two");view(e,"two")}} id="two">
                          <div style={{height:"90px",position:"relative",padding:"10px"}}>
                            <h3 style={{width:"70%",wordBreak:"break-word"}}>SDE Intern</h3>
                            <span>Oct,2022-Dec,2022</span>
                            <img style={{position:"absolute",height:"80%",top:"10px",right:"10px"}} src={"/images/geek.png"}></img>
                          </div>
                          {work==="two" && (
                            <Expand >
                              <ul>
                                  <li>revamped geekster website using nextJs and typescript, making it responsive for mobile devices and to improve user engagement.</li>
                                  <li> Fixed bugs and optimized website perfomance and speed.</li>
                                  <li>implement productive design to make data more highlighted and clear to audience.</li>
                                </ul>
                            </Expand>
                          )}
                    </Openbox>
                    <Openbox onClick={(e)=>{work==="one"?setWork(""):setWork("one"); view(e,"one")}} id="one">
                          <div style={{height:"90px",position:"relative",padding:"10px"}}>
                            <h3 style={{width:"70%",wordBreak:"break-word"}}>Teaching Associate</h3>
                            <span>July,2022- Nov,2022</span>
                            <img style={{position:"absolute",height:"80%",top:"10px",right:"10px"}} src={"/images/geek.png"}></img>
                          </div>
                          {work==="one" && (
                            <Expand> 
                                <ul>
                                  <li>took regular live and remedial classes for 70+ students in java/DSA.</li>
                                  <li>Helped 250+ students by debugging their codes and solved their doubts.</li>
                                  <li>Created 300+ problems based on Java/DSA.</li>
                                </ul>
                            </Expand>
                          )}
                    </Openbox>
                     
                  </Work>
                )}
            </AnimatePresence>
            <Base>
              <ResumeBox>
                <span>Can I help you? lets work</span>
                <a href=" https://drive.google.com/file/d/1MHSE7F1pFQg0XRAjIhMiIKdcZHjj8vwS/view?usp=sharing" download="ChiragJain_Resume" target='_blank'>
                  <motion.button whileTap={{scale:0.8}} type="button">Download Resume</motion.button>
                </a>
              </ResumeBox>
              <TitleBox style={{boxShadow:type!=="About"?"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px":"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}} as={motion.div} whileTap={{ scale: 0.9 }} onClick={()=>setType("About")} >
                <img src={'images/aboutme.png'}></img>
                <p style={{}}>About me</p>
              </TitleBox>
              <TitleBox style={{boxShadow:type!=="Education"?"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px":"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}} as={motion.div} whileTap={{ scale: 0.9 }} onClick={()=>setType("Education")}>
              <img src={'images/education.png'}></img>
                <p>Education</p>
              </TitleBox>
              <TitleBox style={{boxShadow:type!=="Experience"?"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px":"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}} as={motion.div} whileTap={{ scale: 0.9 }} onClick={()=>setType("Experience")}>
                <img src={'images/experience.png'}></img>
                <p>Experience</p>
              </TitleBox>
            </Base>
        </Mobile>
    </Container>
  )
}

const AeroPlane = styled.div`
position: absolute;
left: 50%;
top: 25%;
transform: rotate(24deg);
  span{
    font-size:35px;
  }
`;
const Expand = styled.div`
  height:fit-content;
  border-top:1px solid #473c33;
  background-color:rgba(217,217,217,0.3);
   box-shadow: rgb(0 0 0 / 35%) 0px -32px 22px -28px inset;
  padding:8px;
  padding-bottom:12px;
  ul{
    position:static;
    padding:0px;
    margin:0px;
    li{
      position:relative;
      margin-bottom:8px;
      width: 250px;
      margin-left:15px;
      list-style: none;
    }
    li:before{
      position:absolute;
      content:">";
      top:0px;  
      left: -15px;
      font-size: 18px;
      font-family: monospace;
      font-weight: 600;

    }
  }
`;
const Openbox =styled.div`
  height:fit-content;
  width:100%;
  border:1px solid #bfb6a4;
  margin:auto;
  background-color: white;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;
const Work = styled.div`
  height:70%;
  width:90vw;
  // border:1px solid red;
  margin-top:3%;
  left: 0; 
  right: 0; 
  position:absolute;
  margin-left: auto; 
  margin-right: auto; 
  // border:1px solid red;
   
  p{
    margin-bottom:4px;
    color:rgba(243, 229, 177, 0.99);
  }
  
  &::-webkit-scrollbar {
    display: none;
  }
`;
const OuterCircle = styled.div`
background: url(http://assets.iceable.com/img/noise-transparent.png);
  display:flex;
  align-items:center;
  justify-content:center;
  &:nth-child(1){
    z-index:3;
    position:absolute;
    top:30px;
    left: 30px;
    height:130px;
    width:130px;
    background-color: #494949;
    border-radius:50%;
    // transform: rotate(-43deg);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    // box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  &:nth-child(2){
    z-index:4;
    position:absolute;
    top: 158px;
    left: 152px;
    height:135px;
    width:135px;
    background-color: #494949;
    // opacity: 0.9;
    border-radius:50%;
    transform: rotate(-60deg);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  &:nth-child(3){
    box-shadow: rgb(0 0 0 / 17%) 0px -23px 25px 0px inset, rgb(0 0 0 / 15%) 0px -36px 30px 0px inset, rgb(0 0 0 / 10%) 0px -79px 40px 0px inset, rgb(0 0 0 / 6%) 0px 2px 1px, rgb(0 0 0 / 9%) 0px 4px 2px, rgb(0 0 0 / 9%) 0px 8px 4px, rgb(0 0 0 / 9%) 0px 16px 8px, rgb(0 0 0 / 9%) 0px 32px 16px;
    z-index: 3;
    position: absolute;
    left: 7px;
    height: 150px;
    top: 280px;
    width: 150px;
    background-color: #494949;
    border-radius: 50%;
    -webkit-transform: rotate(14deg);
    -ms-transform: rotate(14deg);
    transform: rotate(10deg);
  }
`;
const InnerCircle = styled.div`
  // border:1px solid red;
  display:flex;
  flex-direction:column;
  align-items:center;
  border-radius:50%;
  justify-content:center;
  // background:#eddfa6;
  background:white;
  transition:0.3s;
  postion:relative;
  z-index:4;
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  // box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  box-shadow: inset 2px 0px 15px 1px rgba(0,0,0,0.5);
  p{
    color:black;
  }
  &:hover{
    scale:1.5;
    cursor:pointer;
    div{
      display:flex;
    }
    img{
      display:none;
    }
  }
  div{
    display:none;
  }
  img{
    height:60px;
  }
`;
const Stick = styled.div`

background: url(http://assets.iceable.com/img/noise-transparent.png);
  position:absolute;
  height:70px;
  width:50px;
  background-color: #494949;
  // opacity: 0.9;
  z-index:0;
  bottom: -40px;
  right: -20px;
  transform: rotate(-43deg);
  &:after{
    content: "";
    position: absolute;
    height:  110%;
    width: 30px;
    // background-color: black;
    background: #0f0f0f url(http://assets.iceable.com/img/noise-transparent.png) repeat 0 0;
    border-radius: 50%;
    top: -3px;
    left: -25px;
  }
  &:before{
    content: "";
    position: absolute;
    height: 110%;
    width: 30px;
    background: #0f0f0f url(http://assets.iceable.com/img/noise-transparent.png) repeat 0 0;
    border-radius: 50%;
    top:0px;
    right:-25px;

  }
`;
const Stick2 = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
background: url(http://assets.iceable.com/img/noise-transparent.png);
position:absolute;
height:70px;
width:50px;
background-color: #494949;
z-index:0;
top: -35px;
right: -16px;
transform: rotate(40deg);
&:after{
  content: "";
  position: absolute;
  height: 100%;
  width: 30px;
  background: #0f0f0f url(http://assets.iceable.com/img/noise-transparent.png) repeat 0 0;
  border-radius: 50%;
  top: -3px;
  left: -25px;
}
&:before{
  content: "";
  position: absolute;
  height: 100%;
  width: 30px;
  background: #0f0f0f url(http://assets.iceable.com/img/noise-transparent.png) repeat 0 0;
  border-radius: 50%;
  top:0px;
  right:-25px;
}
`;
const Container = styled.div`
    height:100%;
    width:100%;
    max-height:900px;
    position:relative;
    scroll-snap-align: start;
    display:flex;
    flex-direction: column;
    @media only screen and (max-width: 430px) {
      justify-content: flex-end;
  }
`;
const Laptop = styled.div`
    height:100vh;
    width:100vw;
    postion:relative;
    @media only screen and (max-width: 660px) {
      display:none;  
    }
`;

const Mobile = styled.div`
    height:100%;
    postion:relative;
    overflow:hidden;
    display:none;
    @media only screen and (max-width: 660px) {
      display:block;  
    }
`;
const Base = styled.div`
    position:absolute;
    bottom:0px;
    height:30%;
    width:100%;
    // border:1px solid red;
    border-radius: 12px 12px 0px 0px;
    display:flex;
    // align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;
    background-color: rgba(77,77,77,0.4);
`;
const ResumeBox=styled.div` 
    margin-top:10px;
    width:90%;
    height:40px;
    // border:1px solid red;
    display:flex;
    justify-content:space-between;
    align-items:center;
    span{
        width:120px;
        font-size:16px;
        color:#d0d0d0;
        font-weight:500;
    }
    button{
      height:90%;
      width:120px;
      border-radius:25px;
      background-color:rgba(0,0,0,0.4);
      color:#d0d0d0;
      border:1px solid black;
    }
`
const TitleBox = styled.div`
    height:85px;
    width:29%;
    // border:1px solid blue;
    padding:5px;
    border-radius:18px;
    background-color:rgba(255,255,255,1);
    font-size:18px;
    cursor:pointer;
    transition:0.1s;
    color:#473c33;
    font-weight:400;
    margin-bottom:25px;
    img{
      margin-top:10px;
      height:24px;
      width:24px;
    }
`;


const DecisionBox = styled.div`
  height:7%;
  max-height:60px;
  width:60%;
  margin-top:100px;
  margin-left:7vw;
  display:flex;
  @media only screen and (max-width: 130px) {
    width:90%;
  }
}
`;


const Circle = styled.div`
  position:absolute;
  height:125px;
  width:125px;
  border-radius:50%;
  top:10%;
  right:10%;
  background-color:#fda769;
  top: 15%;
  right: 16%;
  @media only screen and (max-width: 900px) {
    height:100px;
    width:100px;
    right: 10%;
  }
`;
const Circle1 = styled.div`
  position:absolute;
  height:125px;
  width:125px;
  border-radius:50%;
  bottom:20%;
  left:25%;
  background-color:#fec868;
  filter:blur(120px);
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
  @media only screen and (max-width: 1100px) {
    width: 160px;
  }

  @media only screen and (max-width: 430px) {
      display:none;
  }
`;
const ContentBox = styled.div`
  height:60%;
  max-height:600px;
  z-index:2;
  width:80%;
  padding:20px;
  margin-left:5vw;
  // border:1px solid grey;
  background-color:	rgba(60,60,60,0.3);
  display:flex;
  align-items:center;
  backdrop-filter: blur(22.8007px);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media only screen and (max-width: 1100px) {
    width:90%;    
  }
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
    z-index:3;
    position: absolute;
    right: 0px;
    bottom: 0px;
    font-family: 'GT Sectra Display','Times New Roman',sans-serif;
    font-size: 44rem;
    font-weight: bolder;
    color: transparent;
    text-shadow: 0.02em 0.02em 0.01em rgb(0 0 0 / 25%), 0 0 0 #191919;
    p{
      line-height:0.8;
    }
   @media only screen and (max-width: 3000px) {
      font-size: 40rem;
    }
    @media only screen and (max-width: 2450px) {
      font-size: 34rem;
    }
    @media only screen and (max-width: 2150px) {
      font-size: 30rem;
    }
    @media only screen and (max-width: 1750px) {
      font-size: 28rem;
    }
    @media only screen and (max-width: 1300px) {
      font-size: 25rem;
    }
     @media only screen and (max-width: 1000px) {
      font-size: 22rem;
    }
    @media only screen and (max-width: 770px) {
      font-size: 18rem;
    }
`;

const App = styled.ul`
  position:static;
  display:none;
  cursor:pointer;
  height:fit-content;
  z-index:1;
  flex-direction:column;
  justify-content:center;
  border-radius:14px;
  width:100%;
  

  padding:5px;
  transition:0.6s;
  color:white; 
  li{
    width:100%;
    padding:2px;
    margin:0px;
    list-style: none;
  }
`;
const Content = styled.div`
    height: fit-content;
    display:none;
    width:27%;
    max-width:300px;
    max-height:300px;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#fec868;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0,0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    justify-content:center;
    position:relative;
    padding:10px;
    transition: 1s;
    h3{
      margin:10px 0px;
      text-align:center;
    }
    h5{
      margin-bottom:10px;
    }
    img{
      height: 4rem;
    }
    &:hover{
      & > ${App}{
        display:block;
      }
      scale:1.1;
      background-color:#74541a; 
      span,h3,h5,img{
        display:none;
      }
    } 
   
    

   @media only screen and (min-width: 2500px) {
      max-width:400px;
   }
`;
const AboutBox= styled.div`
    height:100%;
    width:100%;
    
    overflow:scroll;
    p{
      color:#fec868;
      margin-bottom:5px;
    }
       ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

`;

export default About