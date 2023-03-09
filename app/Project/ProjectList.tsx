import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'
import { SiGithub } from 'react-icons/si'
import { TbWorld } from "react-icons/tb";

import styles from './project.module.css'
type Props = {
    src:string | StaticImageData,
    urlSite:string,
    urlRep:string,
}

const ProjectList = ({src,urlSite,urlRep}: Props) => {

  return (
    <div>
        <div className={styles.project_card}>
            <div className={styles.project__image__wrapper} >
            <Image className={styles.project__image}  fill src={src}  alt='project image' />

            </div>
            <div className={styles.project__icons__wrapper} >
                <div className={styles.project__icon} >
                    <button className={styles.project__icons__bg}>
                    <Link target={"_blank"} rel="noopener noreferrer" href={urlRep}> <SiGithub size={24}/> <span>GitHub</span> </Link>
                   
                    </button>
                    
                    <button className={styles.project__icons__bg}>
                    <Link target={"_blank"} rel="noopener noreferrer" href={urlSite}>  <TbWorld  size={24} /> <span>Site</span> </Link>

                   

                    </button>
                </div>
            </div>
            <div className={styles.project__bio}>
                {/* <p>this is a detail about this project</p> */}
            </div>
        </div>
    </div>
  )
}

export default ProjectList