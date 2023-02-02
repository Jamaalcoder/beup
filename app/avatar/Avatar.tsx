import Image from 'next/image'
import React from 'react'
// import styles from   '../sidebar/sidebar.module.css'
import styles from './Avatar.module.css'
type Props = {
    src:string,
   
    
}
function Avatar({src}: Props) {
    const myLoader=({src}:Props)=>{
        return `${src}`;
      }
    return (
        <Image className={styles.avatar_top} loader={myLoader} fill object-fit='contain'  src={src}  alt='avatar' />
    )
}

export default Avatar