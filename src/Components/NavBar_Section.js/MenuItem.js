import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};



const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const img=["images/aboutNav.png","images/skillsNav.png","images/projectNav.png","images/contactNav.png"];

export const MenuItem = ({ i , name, setCurr}) => {

  const style = { borderLeft: `2px solid ${colors[i]}`, color:colors[i] };

  const handleClick= (e,name)=>{
    let id  = name+"Section";
    let elem = document.getElementById(id);
    let navBtn = document.getElementById("navBtn");
    navBtn.click();
    setTimeout(()=>{
      elem.scrollIntoView({behavior:"smooth"});
    },200);
    
  }  
  return (
    <>
      <motion.li
        className="li-box"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e)=>handleClick(e,name)}
      >
        <div className="icon-placeholder " >
          <img src={img[i]} style={{height:"100%",width:"100%"}}></img>
        </div>
        {/* <motion.div className="hde" intial={{opacity:1}} style={{backgroundColor:`${colors[i]}`}}whileInView={{width:["80%","70%","60%","50%","40%","30%","20%","10%","0%"]}} transition={{duration:.5}}></motion.div> */}
        <motion.div className="text-placeholder" style={style} >{name}</motion.div>
      </motion.li>
      
    </>
   
  );
};

