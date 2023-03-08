import Image from 'next/image'
import React from 'react'
import styles from './bootcampJustIT.module.css'
type Props = {
    src: string,
}

const BootcampJustIT = ({ src }: Props) => {
    return (
        <div>
            <div className={styles.bootcamp_card}>
                <div className={styles.bootcamp__image_wrapper}>
                    <Image className={styles.bootcamp__image} fill object-fit='contain' src={src} alt='JustIT Bootcamp' />
                </div>

                <p className={styles.bootcamp__para}>
                    I recently completed a 12-week bootcamp that focused on web development technologies such as Javascript, HTML/CSS, MySQL and Python. The program was intense but highly rewarding; I graduated from the program on 10/03/2023 with a comprehensive understanding of these essential technologies.
                </p>
            </div>
        </div>
    )
}

export default BootcampJustIT