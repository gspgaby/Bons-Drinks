import React from 'react';
import styles from './DrinksPopulares.module.css'

function DrinksPopulares(){
  const [drinks, setDrinks] = React.useState([]);

  React.useEffect(() => {
    async function fetchApi(){
     const response = await (await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")).json();
    setDrinks(response.drinks);
     console.log(drinks);
     console.log(response.drinks);
    }
    fetchApi();
    
  }, []);

  return (
    <>
      <h1 className={styles.titulo}>Drinks Populares</h1>
      <main className={styles.container}>    
        
        <ul className={styles.lista}>
          {drinks.slice(0,10).map((drink) => {
            return <li key={drink.idDrink}>
                <p className={styles.text}>{drink.strDrink}</p>
                <img src={drink.strDrinkThumb} alt="drink"/>
            </li>;
          })}
        </ul>
        
      </main> 
    </>  
  );

};    
export default DrinksPopulares;