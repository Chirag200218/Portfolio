import React from 'react'
import styled from "styled-components";
import contact from './contact.css'


function Contact() {
  return (
    <Container id="ContactSection"> 
      <Header>Contact</Header>
      <Form action="https://formspree.io/f/mpznyqjv" method="POST">
      
        {/* <input className="button drawed" placeholder="Your name goes here..."></input>     */}
        <Input className="button drawed meet"><input spellCheck="false" type="text" name="name" placeholder="Your name goes here..." required></input></Input>
        <Input  className="button drawed meet">  <input spellCheck="false" type="email" name="email"   placeholder="Your email goes here..." required></input></Input>
      
        <TextArea className="button center"> <textarea spellCheck="false" type="content" name="content" placeholder="Your message goes here..." required></textarea> </TextArea>
        <Send type="submit" >Send</Send>
      </Form>
      
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height:100vh;
    scroll-snap-align: start;
    position:relative;
    display:flex;
    flex-direction:column;
    // justify-content: center;
    align-items:center;
`;

const Header = styled.div`
  height:15%;
  width:100%;
  font-weight:700;
  font-family: 'GT Sectra Display','Times New Roman',sans-serif;
  // color: #f7ebda;
  font-size:10rem;
  font-style: italic;
  color: transparent;
        text-shadow: 0.02em 0.02em 0.01em rgb(0 0 0 / 25%), 0 0 0 #8e8e8e;
        -webkit-text-stroke: 0.5px #343434;
  display:flex;
  justify-content: center;
  align-items:center;
  @media (max-width: 450px) {
    font-size:7rem;
    font-style: unset;
  }  
}`;

const Form = styled.form`
  height:85%;
  width:80%;
  // border:1px solid green;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  @media (max-width: 450px) {
    width:90%;
  }

`;
const Input = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:10%;
  width:100%;
  text-decoration:none;
  input{
    height: 75%;
    width: 98%;
    padding: 2%;
    background:transparent;
    border:none;

    
    font-family: 'Montserrat', sans-serif;
    color: #edc282;
    font-size: 2rem;
    @media (max-width: 450px) {
      font-size: 1.5rem;
      padding: 2%;
      color:#fda769;
    }  
  }
  input:focus{
    outline:none;
  }
`;

const TextArea = styled.div`
  height: 50%;   
  padding:  1% 0% 1% 0%;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  textarea{
    height:100%;
    width:98%;
    padding: 2%;
    font-family: 'Montserrat', sans-serif;
    color: #edc282;
    font-size: 2rem;
    background:transparent;
    border:none;
  }
  textarea:focus{
    outline:none;
  }
  @media (max-width: 450px) {
    font-size: 1.5rem;
    padding: 2%;
    color:#fbca67;
  }  
`;
const Send= styled.button`
  display:block;
  height:15%;
  width:50%;
  font-weight:700;
  font-size:8rem;
  display:flex;
  justify-content: center;
  align-items:center;
  font-family: 'GT Sectra Display','Times New Roman',sans-serif;
  color: #111010;
  line-height: 1;
  font-style: italic;
  font-weight: 700;
  -webkit-text-stroke-width: 0.05vw;
  -webkit-text-stroke-color: #e2b8aa;
  // border:1px solid red;
  width: 20%;
  background: transparent;
  border: none;

  transition:0.3s;
  &:hover{
    cursor:pointer;
    color:#bdbdbd;
  }
  @media (max-width: 450px) {
    font-size:8rem;
  }  

`;


export default Contact