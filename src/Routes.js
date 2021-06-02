import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Contato from './pages/Contato/index';
import Drinks from './pages/Drinks/index';
import Home from './pages/Home/index';
import NossoTime from './pages/NossoTime/index';
import SobreNos from './pages/SobreNos/index';

export default function Routes(){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contato' component={Contato} />
                <Route exact path='/drinks' component={Drinks} />
                <Route exact path='/sobrenos' component={SobreNos} />
                <Route exact path='/nossotime' component={NossoTime} />
            </Switch>
        </BrowserRouter>
    )
}