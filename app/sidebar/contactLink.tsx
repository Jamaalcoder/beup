import Link from "next/link";
import { RiMailStarLine } from "react-icons/ri";
import styles from './sidebar.module.css'

export default function ContactLink() {
  return (
    <>
            <div className={styles.sidebar_items}>
                <ul>
                    <li>
                        <Link href={'/contact_me'} ><RiMailStarLine size={24} /> <span>Contact Me</span> </Link>
                    </li>
                </ul>
            </div>
        </>
  )
}
