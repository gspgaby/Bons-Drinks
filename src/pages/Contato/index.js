import React from 'react'
import styles from './Contato.module.css'
import image from '../../img/contact-pic.jpg'

function Contato() {
    return (
        <>
        <h1 className={styles.titulo}>Contato</h1>
        <main className={styles.container}>
            <div className={styles.img}> 
                <img src={image} />
            </div>
            <div>
                <form className={styles.formulario}>
                    <label>Nome:<input className={styles.input}/></label>
                    <label>Email:<input className={styles.input} type="email"/></label>
                    <textarea className={styles.textarea}>Digite sua mensagem aqui</textarea> 
                    <button className={styles.btn}>Enviar</button>
                </form>
            </div>
        </main>
        </>
    )
}

export default Contato
