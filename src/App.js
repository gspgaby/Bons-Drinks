import React from 'react';
import './reset.css';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/index';
import Contato from './pages/Contato/index';
import Drinks from './pages/Drinks/index';
import DrinksAleatorios from './pages/DrinksAleatorios/index'
import BuscaDrink from './pages/BuscaDrink/index'
import DrinksPopulares from './pages/DrinksPopulares/index'
import Home from './pages/Home/index';
import NossoTime from './pages/NossoTime/index';
import SobreNos from './pages/SobreNos/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contato' component={Contato} />
                <Route exact path='/drinks' component={Drinks} />
                <Route exact path='/drinks/populares' component={DrinksPopulares} />
                <Route exact path='/drinks/busca' component={BuscaDrink} />
                <Route exact path='/drinks/aleatorio' component={DrinksAleatorios} /> 
                <Route exact path='/sobrenos' component={SobreNos} />
                <Route exact path='/nossotime' component={NossoTime} />
            </Switch>
            <Footer />
        </BrowserRouter>  
    </div>
  );
}

export default App;