import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    return (
      <div className={styles.cardGrid}>
        <img className={styles.cardImg} src={props.img}  />
        <div className={styles.informations}>
          
            <h2 className={styles.cardHeading}>Nome:</h2>
            <p className={styles.cardText}>{props.name}</p>

            <h2 className={styles.cardHeading}>Categoria: </h2>
            <p className={styles.cardText}>{props.category}</p>

            <h2 className={styles.cardHeading}>Copo: </h2>
            <p className={styles.cardText}>{props.glass}</p>

            <h2 className={styles.cardHeading}>Instruções: </h2>
            <p className={styles.cardText}>{props.instructions}</p>

        </div>
      </div>
    );
  };
  
  export default Card;