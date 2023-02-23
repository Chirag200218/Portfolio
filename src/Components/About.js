import React from 'react'
import styled from 'styled-components';
import {motion,AnimatePresence} from "framer-motion"
import { useState } from 'react';

function About() {
  const [type,setType] = useState("About");
  const [work,setWork] = useState("");
  const view=  (e,id)=>{
    let outer = document.getElementById("scrollable");
    let elem = document.getElementById(id);
    console.log(elem);
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
         <Header  as={motion.div} viewport={{ once: true }}  initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}}  transition={{duration:1}}>About</Header>
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
              (<AboutBox>
                <span>Chirag is persuing B.tech in Computer Science from SKIT,Jaipur.He has worked with geekster as a SDE intern and teaching associate.</span>
                <span>Chirag is fueled by his passion to learn and grow pierjgp prj gjerogjpgjer gigjre gerpijg perregjergpre erigjerp gjer igijt pfrjgprjg pigj repigj petigj tetpigjtrpigjtpogj potg</span>
              </AboutBox>)
            }
            {
              type==="Experience" &&
              <BackImage>
                <Content>
                <img src={'/images/geek.png'} alt="chirag"></img>
                  <h3>Teaching Associate</h3>
                  <h5>Geekster</h5>
                  <span>Nov,2022-Dec,2022</span>
                  <App>Worked as odfp ipdfjd ip</App>
                </Content>  
                <Content>
                  <img src={'/images/geek.png'} alt="chirag"></img>
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
                <img src={'/images/CA.png'} alt="chirag"></img>
                  <h3>Matric, 2018 </h3>
                  <h5>Central Academy, Chittor</h5>
                  <App>Worked as odfp ipdfjd ip</App>
              </Content>
              <Content>
                <img src={'/images/CA.png'} alt="chirag"></img>
                  <h3>Secondary, 2020 </h3>
                  <h5>Central Academy, Chittor</h5>
                  <App>Worked as odfp ipdfjd ip</App>
              </Content>
              <Content>
              <img src={'/images/skit.png'} alt="chirag"></img>
                <h3>Btech, CSE</h3>
                <h5>SKIT, Jaipur</h5>
                <span>2020-24</span>
                <App>Worked as odfp ipdfjd ip</App>
              </Content>

              </BackImage>
              
            }
        </ContentBox>
        </Laptop>
        <Mobile>
            {/* <GIFImage as={motion.div} viewport={{once:true}} intial={{x:-100}} whileInView={{x:10}} transition={{duration:10}}>
              <img src={'images/hii.gif'}></img>
            </GIFImage> */}
            <AnimatePresence>
              {type==="About" && (
                <Work>
                  <p style={{color:"white"}}>wvfwkvifojv oghfh boivjf vfou oiufhvfe voi vfoivh vojfjdvn fo dfoivih foih fivh oifv  oirfh iofhfv rfoviherovi hphjfv ovh er fvihj efiohj e</p>
                  <p>pipjeripj ferj fpwojf rpifj prf prifj rpifj pir jf rwpj rwpj rfpifjwr fipjrw familyprwifj rpfjprfjpirjfprjfpjrjpirjij rpjrif rfijrfpi jrifpjripjiprjiprjif rpijfirp</p>
                </Work>
              )}
            </AnimatePresence>
            <AnimatePresence>
                {type==="Education" && (
                  <Work as={motion.div} initial={{x:300}} whileInView={{x:0}} exit={{x:-400}} transition={{duration:0.9 ,ease:["linear"] ,type: 'spring',stiffness: 70}}> 
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
                          <p style={{fontSize:"9px"}}>Won multiple university TT champioship and taught 300+ juniors coding through college clubs</p>
                        </div>
                      </InnerCircle>
                      <Stick2></Stick2>
                    </OuterCircle>
                  </Work>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {type==="Experience" && (
                  <Work id="scrollable" as={motion.div} initial={{x:300}} whileInView={{x:0}} exit={{x:-400}} transition={{duration:1.2,ease: ["linear"],type:'spring',stiffness:70}} style={{overflow:"scroll",cursor:"pointer",padding:"10px"}}> 
                     <Openbox onClick={(e)=>{work==="one"?setWork(""):setWork("one"); view(e,"one")}} id="one">
                        <div style={{height:"90px",position:"relative",padding:"10px"}}>
                          <h3 style={{width:"70%",wordBreak:"break-word"}}>Teaching Associate</h3>
                          <span>July,2022- Nov,2022</span>
                          <img style={{position:"absolute",height:"80%",top:"10px",right:"10px"}} src={"/images/geek.png"}></img>
                        </div>
                        {work==="one" && (
                          <Expand> 

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

                          </Expand>
                        )}
                     </Openbox>
                  </Work>
                )}
            </AnimatePresence>
            <Base>
              <ResumeBox>
                <span>Can I help you? lets work</span>
                <button>Resume</button>
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

const Expand = styled.div`
  height:300px;
  border-top:1px solid #473c33;
  opacity:0.3;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
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
  width:300px;
  margin-top:5%;
  left: 0; 
  right: 0; 
  position:absolute;
  margin-left: auto; 
  margin-right: auto; 
  // border:1px solid red;
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
    top:3%;
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
    top: 34%;
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
    top: 60%;
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
    height:100vh;
    width:100%;
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
    height:27%;
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
    margin-top:8px;
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
    }
`
const GIFImage = styled.div`
    position:absolute;
    left:-50px;
    bottom:20%;
`;
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
    img{
      margin-top:20px;
      height:24px;
      width:24px;
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

`;
const ContentBox = styled.div`
  height:60%;
  z-index:2;
  width:80%;
  margin-left:6%;
  // border:1px solid grey;
  background-color:	rgba(60,60,60,0.3);
  display:flex;
  align-items:center;
  backdrop-filter: blur(22.8007px);
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
z-index:3;
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
      scale:1.1;
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