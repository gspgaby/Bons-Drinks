import React, { useState, useEffect } from "react";
import aleatorio  from "../../hooks/aleatorio";
import styles from "./DrinksAleatorios.module.css";
import Card from '../../components/Card/index';

const DrinksAleatorios = () => {
  const [reqDrinks, setReqDrinks] = useState([]);

    const click = async () =>{
        const req = await aleatorio();
        setReqDrinks(req.drinks[0])
    }

    useEffect(()=>{
        click()
    },[])

  return (
    <>
      <h1 className={styles.titulo}>Sorteie um drink</h1>
      <main className={styles.container}>
          <div>
            <button className={styles.button} onClick={click}>Sorteie um drink</button>
            <Card img={reqDrinks.strDrinkThumb} name={reqDrinks.strDrink} glass={reqDrinks.strGlass} category={reqDrinks.strCategory} instructions={reqDrinks.strInstructions} />
          </div>
      </main>
    </>
  );
};

export default DrinksAleatorios;