import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Teachers from './teachers/Teachers'
import styles from './Home.module.css'
import MainContent from './Main/content'
export default function Home(){
return(
    <div className={styles.all}>
        <Header/>
        <MainContent/>
        <Teachers/>
        <Footer/>
    </div>
)
}