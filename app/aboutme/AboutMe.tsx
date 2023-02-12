import React from 'react'
import Avatar from '../avatar/Avatar'
import styles from './About.module.css'
type Props = {}

function AboutMe({}: Props) {
  return (
   <>
   <div className={styles.about_conatiner} >
    <div className={styles.leftside_image}>
        <Avatar src={'https://i.pravatar.cc'} />
    </div>
    <div className={styles.rightside_content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore necessitatibus excepturi iure quas molestiae autem neque porro debitis laborum magnam itaque, alias, aut deleniti molestias ipsam dolore voluptatum. In dicta facilis dolore! Nisi recusandae totam expedita, similique accusantium aliquid placeat laboriosam! Quo illo consequatur omnis perferendis molestiae id quam.</p>
    </div>
   </div>
   </>
  )
}

export default AboutMe