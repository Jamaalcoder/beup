import React from 'react'
import { SiCss3, SiHtml5, SiJavascript, SiNpm, SiReact, SiRedux, SiSass, SiTypescript } from "react-icons/si";
import styles from './skill.module.css'
type Props = {}

const FrontEnd = (props: Props) => {
  return (
    <div>
      <div className={styles.skill_card}>
        <span  className={styles.skill__title}>
          Front-End Technologies
        </span>
        <div className={styles.skill__icon__wrapper}>
          <div className={styles.block}>
            <span>Javascript</span>
            <SiJavascript color='DarkOrange' size={80} />
          </div>
          <div className={styles.block}>
            <span>Typescript</span>
            <SiTypescript color='MediumSlateBlue' size={80} />
          </div>
          <div className={styles.block}>
            <span>CSS 3</span>
            <SiCss3 color='blue' size={80} />
          </div>
          <div className={styles.block}>
            <span>HTML 5</span>
            <SiHtml5 color='Darkred' size={80} />

          </div>
          <div className={styles.block}>
            <span>ReactJs</span>
            <SiReact color='DodgerBlue' size={80} />
          </div>
          <div className={styles.block}>
            <span>Redux Toolkit</span>
            <SiRedux color='DodgerBlue' size={80} />
          </div>
          <div className={styles.block}>
            <span>NPM</span>
            <SiNpm color='red' size={80} />
          </div>
          <div className={styles.block}>
            <span>Sass</span>
            <SiSass color='Plum' size={80} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontEnd