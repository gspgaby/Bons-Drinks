import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul class={styles.container}>
            <Link className={styles.link} to="/drinks">Drinks</Link>
            <Link className={styles.link} to="/sobrenos">Sobre Nós</Link>
            <Link className={styles.link} to="/"> Home </Link>
            <Link className={styles.link} to="/contato">Contato</Link>
            <Link className={styles.link} to="/nossotime">Nosso Time</Link>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header
