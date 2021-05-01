import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home/index';
import Compras from './components/Compras/index';
import Deposito from './components/Deposito/index';
import Metas from './components/Metas/index';
import AddMetas from './components/AddMetas/index';



function Routes(){
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Compras} path="/compras" />
            <Route component={Deposito} path="/deposito" />
            <Route component={Metas} path="/metas" />
            <Route component={AddMetas} path="/addmetas" />
        </BrowserRouter>
    );
}

export default Routes;