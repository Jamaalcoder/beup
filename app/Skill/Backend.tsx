import React from 'react'
import {SiExpress, SiHtml5,SiMongodb,SiMysql,SiNextdotjs,SiNodedotjs, SiNpm, SiPython, SiReact } from "react-icons/si";
import styles from './skill.module.css'
type Props = {}

const Backend = (props: Props) => {
  return (
    <div>
         <div className={styles.skill_card}>
        <span  className={styles.skill__title}>
          Back-End Technologies
        </span>
        <div className={styles.skill__icon__wrapper}>
          <div className={styles.block}>
            <span>NodeJS</span>
            <SiNodedotjs color='Darkgreen' size={80} />
          </div>
          <div className={styles.block}>
            <span>ExpressJs</span>
            <SiExpress color='blue' size={80} />
          </div>
          <div className={styles.block}>
            <span>MYSQL</span>
            <SiMysql color='Maroon' size={80} />

          </div>
          <div className={styles.block}>
            <span>MongoDB</span>
            <SiMongodb color='LimeGreen' size={80} />
          </div>
          <div className={styles.block}>
            <span>Python</span>
            <SiPython color='RoyalBlue' size={80} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend