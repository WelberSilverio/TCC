import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom'
import MenuLogin from '../Login/Login'
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="content">
                    <Route path="/login" Component={MenuLogin} />
                </div>
            </HashRouter>
        );
    }
}

export default Main;