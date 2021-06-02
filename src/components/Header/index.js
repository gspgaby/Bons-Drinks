import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul class={styles.container}>
            <li><Link className={styles.link} to="/drinks">Drinks</Link></li>
            <li><Link className={styles.link} to="/sobrenos">Sobre Nós</Link></li>
            <li><Link className={styles.link} to="/"> Home </Link></li>
            <li><Link className={styles.link} to="/contato">Contato</Link></li>
            <li><Link className={styles.link} to="/nossotime">Nosso Time</Link></li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header
