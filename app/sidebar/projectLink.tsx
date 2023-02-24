import Link from "next/link";
import { RiInboxLine } from "react-icons/ri";
import styles from './sidebar.module.css'
export default function ProjectLink() {
    return (
        <>
            <div className={styles.sidebar_items}>
                <ul>
                    <li>
                        <Link href={'/projects'} ><RiInboxLine size={24} /> <span>Projects</span> </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
