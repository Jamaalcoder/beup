import ProjectList from '@/app/Project/ProjectList'
import React from 'react'
import styles from '../app/Project/project.module.css'
type Props = {}

const projects = (props: Props) => {
  return (
    <div className={styles.projects__wrapper}>
     <ProjectList urlSite={'https://jamaaldev.github.io/interactive-pricing-component-main/'} urlRep={'https://github.com/jamaaldev/interactive-pricing-component-main'} src={'https://github.com/jamaaldev/interactive-pricing-component-main/blob/main/pric.PNG?raw=true'} />
     <ProjectList urlSite={'https://jamaaldev.github.io/interactive-rating-component-main/'} urlRep={'https://github.com/jamaaldev/interactive-rating-component-main'} src={'https://github.com/jamaaldev/interactive-rating-component-main/blob/main/Screenshot-rating.png?raw=true'} />
     <ProjectList urlSite={'https://jamaaldev.github.io/GuessNumber/'} urlRep={'https://github.com/jamaaldev/GuessNumber'} src={'https://github.com/jamaaldev/GuessNumber/blob/master/screenshot-guessnumber.PNG?raw=true'} />
    </div>
  )
}

export default projects