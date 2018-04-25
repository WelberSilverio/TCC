import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom'
import MenuLogin from '../Login/Login'
import Home from '../Home/Home'
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="content">
                    <Route path="/" Component={Home} />
                    <Route path="/login" Component={MenuLogin} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;