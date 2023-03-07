import React from 'react'
import Avatar from '../avatar/Avatar'
import Values from '../Value/Values'
import styles from './About.module.css'
type Props = {}

function AboutMe({}: Props) {
  return (
   <>
   <div className={styles.about_conatiner} >
    <div className={styles.leftside_image}>
        <Avatar src={'https://avatars.githubusercontent.com/u/43518055?v=4'} />
    </div>
    <div className={styles.rightside_content}>
        <p className={styles.rightside_about}>About Me</p>
        <p className={styles.rightside_p}>I have been a web developer for more than three years now, and I specialize in front-end development. Although my preference is to work on the front end, I am also quite comfortable with backend development as well. My top skills when it comes to developing the front end are HTML, CSS, JavaScript, and React,NextJs. Also, backend technologies are Node-JS-based frameworks such as Express.JS, Additionally, I have experience working with databases like MySQL and MongoDB which form an integral part of any modern web application today.</p>
        <Values/>
    </div>
   </div>
   </>
  )
}

export default AboutMe