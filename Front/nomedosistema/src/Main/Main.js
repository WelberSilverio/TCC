import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import MenuLogin from '../Login/Login'
import Home from '../Home/Home'
import Cadastro from '../Cadastro/Cadastro'
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={MenuLogin} />
                    <Route path="/cadastro" component={Cadastro} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;