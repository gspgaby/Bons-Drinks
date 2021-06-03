import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import DrinksPopulares from '../DrinksPopulares/index';
import BuscaDrink from '../BuscaDrink/index';
import DrinksAleatorios from '../DrinksAleatorios/index';
import styles from './Drinks.module.css';

const Drinks = (props) => {
  return (
    <>
    <h1 className={styles.titulo}>Drinks</h1><br/>
    <main className={styles.container}>
    <NavLink to="/drinks/populares"><button className={styles.button}>Drinks Populares</button></NavLink>
    <NavLink to="/drinks/busca"><button className={styles.button}>Buscar Drinks</button></NavLink>
    <NavLink to="/drinks/aleatorio"><button className={styles.button}>Sorteie um drink</button></NavLink>
      <Switch>
        <Route exact path="/drinks/populares"component={DrinksPopulares} /> 
        <Route exact path="/drinks/busca" component={BuscaDrink} />
        <Route exact path="/drinks/aleatorio" component={DrinksAleatorios} />
      </Switch>
    </main>
    </>
  );
};

export default Drinks;