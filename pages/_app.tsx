import { AppProps } from 'next/app';
import Layout from "../app/layout";
import '../styles/global.css';
import { Inter } from '@next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }:AppProps) {
    return (
        <>
         <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
            <div  className={inter.className}>
            <Layout >
                <Component {...pageProps} />
            </Layout>
            </div>
            
        </>
    )
}
