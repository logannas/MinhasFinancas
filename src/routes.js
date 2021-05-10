import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../src/components/Login/index';
import Home from '../src/components/Home/index';
import Deposito from '../src/components/Deposito/index';
import Compras from '../src/components/Compras/index';
import Metas from '../src/components/Metas/index';
import AddMetas from '../src/components/AddMetas/index';
import Cadastro from '../src/components/Cadastro/index';
import Senha from '../src/components/Senha/index';
import useToken from './useToken';

function PrivateRoute ({ component: Component, ...rest }){
    const { token, setToken } = useToken();
    return(
        <Route
        {...rest}
        render={props =>
            token ? (
                <Component {...props} />
            ) : (
                <div>
                    <Login setToken={setToken}></Login>
                </div>
            )
        }
    />
    )
}


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/senha" component={Senha} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute path="/deposito" component={Deposito} />
                <PrivateRoute path="/compras" component={Compras} />
                <PrivateRoute path="/metas" component={Metas} />
                <PrivateRoute path="/addmetas" component={AddMetas} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;