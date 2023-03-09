import React from 'react'
import styles from './values.module.css'
type Props = {}

const Values = (props: Props) => {
    return (
        <div>
            <div className={styles.values_box}>
                <div className={styles.values__content}>
                    <p className={styles.values_title}>What I Value</p>
                        <ul className={styles.ul_dot}>
                            <li className={styles.li_dot}>As a software engineer.</li>
                            <ul className={styles.nested_ul}>
                                <li>workplace that is friendly</li>
                                <li>interpersonal communication</li>
                                <li>having good relationships with coworkers</li>
                                <li>environment of respect</li>
                                <li>environment of trust</li>
                                <li>communicate openly about issues they are facing</li>
                                <li>Solving problem together</li>
                            </ul>
                        </ul>
                    <p>
                       
                        
                        
                        
                        
                    

                        

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Values