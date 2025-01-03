import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = ({setCurr}) => (
  <motion.ul variants={variants} className="ul-box">
    {itemIds.map(i => (
      <MenuItem i={i} name={itemName[i]} key={i} setCurr={setCurr}/>
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3];
const itemName =["About","Skills","Projects","Contact"];
export default Navigation;
