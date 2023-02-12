import React from 'react'
import styles from './profile.module.css'
type Props = {}

function Profile({}: Props) {
  return (
    <>
    <div className={styles.profile_container}>
    <p>Welcome to My Portofolio Website ShowCase</p>
    <span>Hi, My Name is</span>
    <h1 className={styles.profile_fullname}><span>Jamaal</span> <span>Mahamed</span></h1>
    <span className={styles.profile_professional}>I am Full-Stack Web Developer</span>
    <div className={styles.profile_btn}>
    <button>Download CV</button>
    <button>Contact Me</button>

    </div>
    </div>
    </>
  )
}

export default Profile