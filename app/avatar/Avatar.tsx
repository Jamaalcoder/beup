import Image from 'next/image'
import React from 'react'
// import styles from   '../sidebar/sidebar.module.css'
import styles from './Avatar.module.css'
type Props = {
    src:string,
   
    
}
function Avatar({src}: Props) {

    return (
        <Image className={styles.avatar_top}  fill object-fit='contain'  src={src}  alt='avatar' />
    )
}

export default Avatar