import React from 'react';
import image from '../../img/Gabriella.jpg'
import styles from './NossoTime.module.css'

const NossoTime = () => {
    return (
        <>
        <h1 className={styles.titulo}> Nosso Time </h1>
        <main className={styles.container}>
            <div className = 'integrante1'>
                <img src={image} />
                <div>
                    <h1 className={styles.text}> Gabriella dos Santos Pereira </h1>
                    <p className={styles.text2}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
                        temporibus nesciunt at doloremque accusantium reiciendis. Sint,
                        necessitatibus veniam. Earum similique officiis cumque ad beatae dolores
                        amet excepturi expedita impedit. 
                    </p>
                </div>
            </div>

            <div className = 'integrante2'>
                <img src={image} />
                <div>
                    <h1 className={styles.text}> Gabriella dos Santos Pereira </h1>
                    <p className={styles.text2}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
                        temporibus nesciunt at doloremque accusantium reiciendis. Sint,
                        necessitatibus veniam. Earum similique officiis cumque ad beatae dolores
                        amet excepturi expedita impedit. 
                    </p>
                </div>
            </div>

            <div className = 'integrante3'>
                <img src={image} />
                <div>
                    <h1 className={styles.text}> Gabriella dos Santos Pereira </h1>
                    <p className={styles.text2}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
                        temporibus nesciunt at doloremque accusantium reiciendis. Sint,
                        necessitatibus veniam. Earum similique officiis cumque ad beatae dolores
                        amet excepturi expedita impedit. 
                    </p>
                </div>
            </div>
        </main>
        </>
    )
}

export default NossoTime