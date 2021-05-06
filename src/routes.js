import React from 'react';
 
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { isAuthenticated } from './auth';
import Login from '../src/components/Login/index';
import Home from '../src/components/Home/index';
import Deposito from '../src/components/Deposito/index';
import Compras from '../src/components/Compras/index';
import Metas from '../src/components/Metas/index';
import AddMetas from '../src/components/AddMetas/index';
import Cadastro from '../src/components/Cadastro/index';
import Senha from '../src/components/Senha/index';

const PrivateRoute = ({ component: Component, ...rest}) =>(
    <Route 
        {...rest} 
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <div>
                    {alert("falha de autenticação")}
                    <Redirect to={{pathname:'/', state:{ from: props.location} }} />
                </div>
            )
        }
    />
)

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/senha" component={Senha}/>
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/deposito" component={Deposito} />
            <PrivateRoute path="/compras" component={Compras} />
            <PrivateRoute path="/metas" component={Metas} />
            <PrivateRoute path="/addmetas" component={AddMetas} />
        </Switch>
    </BrowserRouter>
);

export default Routes;