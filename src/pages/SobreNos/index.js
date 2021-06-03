import React from 'react'
import image from '../../img/sobre-nos.jpg'
import styles from './SobreNos.module.css'

function SobreNos() {
    return (
        <>
        <h1 className={styles.titulo}>Sobre Nós</h1>
        <main className={styles.container}>
            <div className={styles.img}> 
                <img src={image} />
            </div>
            <div>
                <p className={styles.text}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
                temporibus nesciunt at doloremque accusantium reiciendis. Sint,
                necessitatibus veniam. Earum similique officiis cumque ad beatae dolores
                amet excepturi expedita impedit. 
                </p>
                <p className={styles.text}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
                temporibus nesciunt at doloremque accusantium reiciendis. Sint,
                necessitatibus veniam. Earum similique officiis cumque ad beatae dolores
                amet excepturi expedita impedit. 
                </p>
                <p className={styles.text}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
                temporibus nesciunt at doloremque accusantium reiciendis. Sint,
                necessitatibus veniam. Earum similique officiis cumque ad beatae dolores
                amet excepturi expedita impedit. 
                </p>
                <p className={styles.text}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
                temporibus nesciunt at doloremque accusantium reiciendis. Sint,
                necessitatibus veniam. Earum similique officiis cumque ad beatae dolores
                amet excepturi expedita impedit. 
                </p>
                <p className={styles.text}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
                temporibus nesciunt at doloremque accusantium reiciendis. Sint,
                necessitatibus veniam. Earum similique officiis cumque ad beatae dolores
                amet excepturi expedita impedit. 
                </p>
            </div>
        </main>
        </>  
      );
    };

export default SobreNos