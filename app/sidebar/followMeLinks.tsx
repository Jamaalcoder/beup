import Link from "next/link";
import React from "react";
import { useState } from "react";
import { RiAddLine, RiTwitterLine,RiLinkedinBoxLine, RiGithubFill } from "react-icons/ri";
import styles from './sidebar.module.css'
export default function FollowMeLinks() {
  const [onOff,setOnOff] = useState(false)
  const handleClick = () =>{
    !onOff ? setOnOff(true) : setOnOff(false);
  }
  
  return (
    <>
      <ul>
        <div className={styles.sidebar_items}>
          <li>
              <div className={styles.sidebar_hr}></div>
            <div onClick={handleClick} className={styles.sidebar_button} > <span> Follow Me</span><RiAddLine className={ onOff ? styles.sidebar_rot_svg_45 : styles.sidebar_rot_svg_0} size={24}/></div>
            
            <ul className={ !onOff ? styles.sidebar_button_collapse : styles.sidebar_button_uncollapse }>
              <li><Link target={"_blank"} rel="noopener noreferrer" href={'https://www.linkedin.com/in/jamaaldev/'}><RiLinkedinBoxLine size={24} /> <span>LinkedIn</span> </Link></li>
              <li><Link target={"_blank"} rel="noopener noreferrer" href={'https://github.com/Jamaaldev'}><RiGithubFill size={24} /> <span>GitHub</span> </Link></li>
              <li><Link target={"_blank"} rel="noopener noreferrer" href={'https://twitter.com/Jamaaldev'}><RiTwitterLine size={24} /> <span>Twitter</span> </Link></li>
            </ul>
              <div className={styles.sidebar_hr}></div>
              
          </li>
        </div>
      </ul>
    </>
  )
}
