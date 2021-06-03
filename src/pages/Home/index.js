import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
        <main className={styles.container}>
            <section className={styles.section}>  
                <h1 className={styles.text}>Bons Drinks</h1><br/>
                <h3 className={styles.text2}>Encontre os seus drinks preferidos em um só lugar</h3>
            </section>
        </main> 
    )
}

export default Home