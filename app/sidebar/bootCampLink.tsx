import Link from "next/link";
import React from "react";
import { RiPantoneLine } from "react-icons/ri";
import styles from './sidebar.module.css'
export default function BootCampLink() {
    return (
        <>
            <div className={styles.sidebar_items}>
                <ul>
                    <li>
                        <Link href={'/bootcamp'} ><RiPantoneLine size={24} /> <span>BootCamp</span></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
