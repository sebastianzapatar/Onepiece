//Importar de React
import React, { Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Importar los componentes
import Home from './Home';
import Error from './Error'
import Header from './Header'
import Menu from './Menu'
import Agregar from './agregar';
import Editar from './editar';
class Router extends Component {
    render(){
        return(
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route path="/menu" component={Menu}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/agregar" component={Agregar}></Route>
                    <Route path="/editar/:id" component={Editar}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
} 
export default Router;