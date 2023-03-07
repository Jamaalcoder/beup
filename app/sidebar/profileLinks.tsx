import Link from "next/link";
import { RiHome5Line, RiPsychotherapyLine, RiHandHeartLine, RiFocus2Line } from "react-icons/ri";
import styles from './sidebar.module.css'
export default function ProfileLinks() {
  return (
    <>
      <ul>
        <div className={styles.sidebar_items}>
          <li className={styles.sidebar_items_profile}>
            <Link href={'/'} ><RiHome5Line size={24} /> <span>Profile</span> </Link>
            <ul>
              <li><Link href={'/skills'}><RiPsychotherapyLine widths={100} size={24} /><span>Skills</span> </Link></li>
              {/* <li><Link href={'/value'}><RiHandHeartLine size={24} /> <span>Value</span> </Link></li> */}
              {/* <li><Link href={'/goal'}><RiFocus2Line size={24} /><span>Goal</span> </Link></li> */}
            </ul>
          </li>
        </div>
      </ul>
    </>
  )
}

