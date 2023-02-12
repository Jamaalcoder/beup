import AboutMe from "@/app/aboutme/AboutMe";
import Profile from "@/app/profile/Profile";
import Head from "next/head";
import styles from '../app/dashboard.module.css'
export default function Home(){
    return(
        <div>
           
            <Head>
                <title>ProtFolio-jamaaldev</title>
               
            </Head>
            <Profile/>
            <AboutMe/>
            {/* <div className={styles.dashboard_space_footer}></div> */}

        </div>
    )
}