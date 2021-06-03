import React, {useState }from 'react';
import Card from '../../components/Card/index';
import busca from '../../hooks/busca';
import styles from './BuscaDrink.module.css';

function BuscaDrink(){
  
  const [input, setInput] = useState("");
    const [reqDrinks,setReqDrinks] = useState("");

    const type = async (drinkValue) =>{
        const drink = await setInput(drinkValue.target.value)
    }
    const search = async (drink) =>{
        const req = await busca(input);
        setReqDrinks(req.drinks[0])
}
    return (
        <>
        <h1 className={styles.titulo}>Busca Drink</h1>
        <main className={styles.container}>
            <div>
                <form className={styles.formulario}>
                    <label>Qual o Drink deseja encontrar?</label>
                    <input className={styles.input} onChange={type}/>
                    <button className={styles.button} onClick={search}>Buscar</button>
                </form>
            </div>
            <div> 
                <Card img={reqDrinks.strDrinkThumb} name={reqDrinks.strDrink} glass={reqDrinks.strGlass} category={reqDrinks.strCategory} instructions={reqDrinks.strInstructions} />
            </div>
        </main>
        </>
    )
    
}

export default BuscaDrink;