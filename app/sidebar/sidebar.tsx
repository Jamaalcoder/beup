import React from 'react'
import ProfileLinks from './profileLinks'
import styles from './sidebar.module.css'
import ProjectLink from './projectLink'
import BootCampLink from './bootCampLink'
import ContactLink from './contactLink'
import FollowMeLinks from './followMeLinks'
import Avatar from '../avatar/Avatar'
export default function Sidebar() {
  return (
    <>
  

      <aside className={styles.sidebar_aside} >
        <div className={styles.sidebar_middle}>
        <div className={styles.sidebar_middle_top}>
          <div className={styles.sidebar_top_avatar_container} >
            <Avatar src={'https://avatars.githubusercontent.com/u/43518055?v=4'}  />
            <h2>
              <span className={styles.sidebar_top_avatar_first}>jamaal</span> 
              <span className={styles.sidebar_top_avatar_last}>mahamed</span> 
            </h2>
          </div>
        </div>
          <ProfileLinks />
          <ProjectLink />
          <BootCampLink />
          <FollowMeLinks />
          {/* <ContactLink /> */}
        </div>
        <div className={styles.sidebar_bottom}>
          {/* <ContactLink /> */}
        </div>
      </aside>
    </>
  )
}
