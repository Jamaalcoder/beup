import React, { ReactNode } from 'react';
import Footer from "./footer/footer";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import styles from './dashboard.module.css'
import Head from 'next/head';
type Props = {
    children: ReactNode;
  };
export default function Layout({ children }: Props) {
    return (
        <>
        
            <div className={styles.dashboard_container}>
                {/* <div className={styles.dashboard_left_div}>
                </div> */}
                <div className={styles.dashboard_left}>
                    <Sidebar />
                </div>
                <div className={styles.dashboard_right}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
       
        </>
    )
}
