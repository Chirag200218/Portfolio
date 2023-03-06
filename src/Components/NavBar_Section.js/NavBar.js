import { useRef,useState} from "react";
import { motion, useCycle } from "framer-motion";
import Navigation from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./useDimensions";
import style from './style1.css';
import Show from './show.css'
import styled from "styled-components";


const sidebar = {
  open: (height = 150) => ({
    clipPath: `circle(${height * 2 + 200}px at 250px 40px)`,
    zIndex:5,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 250px 40px)",
    zIndex:2,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function NavBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [curr,setCurr] = useState("");
  return (
    <div style={{display:"fixed"}}> 
        <motion.nav
          initial={{zIndex:1}}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          variants={sidebar}
        >
          <motion.div className="background" variants={sidebar} />
          <Navigation setCurr={setCurr}/>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      

    </div>
  )
}




export default NavBar