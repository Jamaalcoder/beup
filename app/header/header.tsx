import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../dashboard.module.css'
export default function Header() {
    const router = useRouter();

    return (
        <>
            
                <header className={styles.header}>
                    <nav>
                        {/* <Link className={router.pathname === '/' ? 'active' : ''} href={'/'} >Home</Link>
                        <Link className={router.pathname === '/about' ? 'active' : ''} href={'/about'} >About</Link>
                        <Link className={router.pathname === '/blog' ? 'active' : ''} href={'/blog'} >Blog</Link> */}
                    </nav>
                </header>
            
        </>
    )
}
