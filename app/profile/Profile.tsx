import Link from 'next/link'
import React from 'react'
import { RiInboxLine } from 'react-icons/ri'
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
    <button><Link  target={"_blank"} rel="noopener noreferrer" className={styles.profile_btn_resume} href={'https://drive.google.com/file/d/1eAE2INQtg_XZ689l6zHVRi27gS-JnGJK/view'} ><div>Check My Resume</div> <RiInboxLine size={24} /></Link></button>
    <button><Link className={styles.profile_btn_project} href={'/projects'} ><div>See My Projects</div><RiInboxLine size={24} /></Link></button>
    {/* <button><Link className={styles.profile_btn_contact} href={'/contact_me'} ><div>Contact Me</div> <RiInboxLine size={24} /></Link></button> */}

    </div>
    </div>
    </>
  )
}

export default Profile